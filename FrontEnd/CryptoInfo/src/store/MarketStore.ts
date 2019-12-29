import { observable } from "mobx";

import { IMarketItemInfo, ICoinDetailed } from "../constants/interfaces";
import { MARKETINFO } from "../constants/marketInfo";
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

  constructor() {
    this.init();
  }

  public getMarketDetailed = async() => {
    return await publicAPI.getMarketDetailed()
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

  public setCurMarket = (market: MarketType) => {
    this.curMarket = market;
  }

  public getMarketCoinCount = (market: MarketType) => {
    return this.marketTokenList.get(market)!.length;
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