import { observable } from "mobx";

import { IMarketItemInfo, ICoinDetailed } from "../constants/interfaces";
import { MARKETINFO, MARKETDECIMALINFO } from "../constants/marketInfo";
import { publicAPI } from "../api/publicAPI";
import { MARKET } from "../constants/texts";
import { ChangeType, MarketType } from "../constants/types";
import { stringToLocale } from "../commonFunction/stringControl";

export class MarketStore {
  @observable marketTokenList = observable.map<string, Array<IMarketItemInfo>>([
    [MARKET.krw, observable.array<IMarketItemInfo>()],
    [MARKET.usdc, observable.array<IMarketItemInfo>()]
  ]);
  @observable curMarket: MarketType = "KRW";
  @observable curCurrencyPairData?: IMarketItemInfo;

  constructor() {
    this.init();
  }

  public getMarketDetailed = async(market: string) => {
    return await publicAPI.getMarketDetailed(market)
    .then((data) => {
      const marketItem: IMarketItemInfo = {
        ... MARKETINFO[market],
        timestamp: 0,
        last: stringToLocale(data.last, MARKETDECIMALINFO[market].price),
        open: stringToLocale(data.open, MARKETDECIMALINFO[market].price),
        bid: stringToLocale(data.bid, MARKETDECIMALINFO[market].price),
        ask: stringToLocale(data.ask, MARKETDECIMALINFO[market].price),
        low: stringToLocale(data.low, MARKETDECIMALINFO[market].price),
        high: stringToLocale(data.high, MARKETDECIMALINFO[market].price),
        volume: stringToLocale(data.volume, MARKETDECIMALINFO[market].volume),
        change: stringToLocale(data.change, MARKETDECIMALINFO[market].price),
        changePercent: stringToLocale(data.changePercent, 2),
        changeType: this.calcChangeType(data.changePercent),
        code: market
      }

      this.curCurrencyPairData = marketItem;
    });
  }

  public getMarketDetailedAll = async() => {
    return await publicAPI.getMarketDetailedAll()
    .then((data) => {
      let krwCount:number = 0;
      let usdcCount:number = 0;

      Object.keys(data).map((key: string) => {
        const market = this.getMarketString(key);
        const coinDetail: ICoinDetailed = data[key];
        const info: IMarketItemInfo = {
          ... MARKETINFO[key],
          timestamp: 0,
          last: stringToLocale(coinDetail.last),
          open: stringToLocale(coinDetail.open),
          bid: stringToLocale(coinDetail.bid),
          ask: stringToLocale(coinDetail.ask),
          low: stringToLocale(coinDetail.low),
          high: stringToLocale(coinDetail.high),
          volume: stringToLocale(coinDetail.volume),
          change: stringToLocale(coinDetail.change),
          changePercent: stringToLocale(coinDetail.changePercent, 2),
          changeType: this.calcChangeType(coinDetail.changePercent),
          code: key
        }

        if(market === MARKET.krw) {
          this.marketTokenList.get(market)![krwCount] = info;
          krwCount++;
        } else {
          this.marketTokenList.get(market)![usdcCount] = info;
          usdcCount++;
        }
      })
    });
  }

  public getMarketCoinCount = (market: MarketType) => {
    return this.marketTokenList.get(market)!.length;
  }

  public setCurMarket = (market: MarketType) => {
    this.curMarket = market;
  }

  private init() {
    for (const key in MARKETINFO) {
      const info: IMarketItemInfo = {
        ... MARKETINFO[key],
        timestamp: 0,
        last: "0",
        open: "0",
        bid: "0",
        ask: "0",
        low: "0",
        high: "0",
        volume: "0",
        change: "0",
        changePercent: "0",
        changeType: "EVEN",
        code: key
      }

      this.marketTokenList.get(info.market)!.push(info);
    }
  }

  // coin_market 형식일 때 (btc_krw)
  private getMarketString(data: string) {
    return data.split(/[_:]/)[1].toUpperCase();
  }

  private calcChangeType(changePercent: string) {
    const percent: number = Number(changePercent);
    let changeType: ChangeType = "EVEN";

    if(percent > 0) changeType = "RISE";
    else if(percent < 0) changeType = "FALL";

    return changeType;
  }
}