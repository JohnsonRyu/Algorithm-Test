import { observable } from "mobx";

import { IOrderBook, IOrderBookItem } from "../constants/interfaces";
import { publicAPI } from "../api/publicAPI";
import { ORDERBOOK } from "../constants/texts";

export class OrderBookStore {
  @observable orderBookList = observable.map<string, Array<IOrderBookItem>>([
    [ORDERBOOK.bid, observable.array<IOrderBookItem>()],
    [ORDERBOOK.ask, observable.array<IOrderBookItem>()]
  ]);

  constructor() {
    this.init();
  }

  public getOrderBookData = async(market: string) => {
    return await publicAPI.getOrderBook(market)
    .then((data: IOrderBook) => {
      for (const i in data.asks){
        const askData : IOrderBookItem = {
          price: data.asks[i][0],
          amount: data.asks[i][1],
          temp: data.asks[i][2],
        }

        this.orderBookList.get(ORDERBOOK.ask)!.push(askData);
      }

      for (const i in data.bids){
        const bidData : IOrderBookItem = {
          price: data.bids[i][0],
          amount: data.bids[i][1],
          temp: data.bids[i][2],
        }

        this.orderBookList.get(ORDERBOOK.bid)!.push(bidData);
      }
    });
  }

  private init() {
    // 초기화
  }
}