import { observable } from "mobx";

import { IMarketItemInfo } from "../constants/interfaces";
import { MARKETINFO } from "../constants/marketInfo";
import { publicAPI } from "../api/publicAPI";
import { MARKET } from "../constants/texts";

export class MarketStore {
  @observable marketTokenList = observable.map<string, Array<IMarketItemInfo>>([
    [MARKET.krw, observable.array<IMarketItemInfo>()],
    [MARKET.usdc, observable.array<IMarketItemInfo>()]
  ]);

  constructor() {
    this.init();
  }

  public getMarketDetailed = async() => {
    return await publicAPI.getMarketDetailed()
    .then((data) => {
      for (let key in data) {
        console.error(key);
      }
    });
  }

  private init() {
    for (let key in MARKETINFO) {
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
        changeType: "EVEN"
      }

      this.marketTokenList.get(info.market)?.push(info);
    }
  }
}