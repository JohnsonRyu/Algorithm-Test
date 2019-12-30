import { observable } from "mobx";

import { IOrderBook, IOrderBookItem } from "../constants/interfaces";
import { publicAPI } from "../api/publicAPI";
import { ORDERBOOK } from "../constants/texts";
import { MARKETDECIMALINFO } from "../constants/marketInfo";
import { stringToLocale } from "../commonFunction/stringControl";

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
      let askSpliceArr;
      let bidSpliceArr;

      if(data.asks.length < 10) {
        askSpliceArr = data.asks.reverse();
      } else {
        askSpliceArr = data.asks.splice(0, 10).reverse();
      }
      if(data.bids.length < 10) {
        bidSpliceArr = data.bids;
      } else {
        bidSpliceArr = data.bids.splice(0, 10);
      }

      for (const i in askSpliceArr){
        const askData : IOrderBookItem = {
          price: stringToLocale(askSpliceArr[i][0], MARKETDECIMALINFO[market].price),
          amount: stringToLocale(askSpliceArr[i][1], MARKETDECIMALINFO[market].amount),
          temp: askSpliceArr[i][2],
        }

        this.orderBookList.get(ORDERBOOK.ask)![i] = askData;
      }

      for (const i in bidSpliceArr){
        const bidData : IOrderBookItem = {
          price: stringToLocale(bidSpliceArr[i][0], MARKETDECIMALINFO[market].price),
          amount: stringToLocale(bidSpliceArr[i][1], MARKETDECIMALINFO[market].amount),
          temp: bidSpliceArr[i][2],
        }

        this.orderBookList.get(ORDERBOOK.bid)![i] = bidData;
      }
    });
  }

  private init() {
    for(let i = 0; i < 10; i++) {
      const tempData : IOrderBookItem = {
        price: "",
        amount: "",
        temp: "",
      }

      this.orderBookList.get(ORDERBOOK.ask)!.push(tempData);
      this.orderBookList.get(ORDERBOOK.bid)!.push(tempData);
    }
  }
}