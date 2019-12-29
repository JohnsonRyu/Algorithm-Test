import { observable } from "mobx";

import { IMarketItemInfo, ICoinInfo } from "../constants/interfaces";
import { MARKETINFO } from "../constants/marketInfo";

export class MarketStore {
  @observable marketItemInfo : IMarketItemInfo[] = [];

  constructor() {
    this.marketItemInfo = this.getMarketDetailed();
  }

  private getMarketDetailed() {
    return MARKETINFO.KRW.map((data: ICoinInfo) => {
      const info: IMarketItemInfo = {
        ...data,
        timestamp: 1577365310583,
        last: "52.2",
        open: "55",
        bid: "51.7",
        ask: "52.2",
        low: "51.6",
        high: "55",
        volume: "586236.187707313636363636",
        change: "-2.8",
        changePercent: "-2.4",
        changeType: "FALL"
      }
      return info;
    })
  }
}
