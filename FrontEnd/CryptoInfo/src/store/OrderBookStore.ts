import { observable } from "mobx";

import { IOrderBook, IOrderBookItem } from "../constants/interfaces";
import { publicAPI } from "../api/publicAPI";
import { ORDERBOOK } from "../constants/texts";
import { MARKETDECIMALINFO } from "../constants/marketInfo";
import { stringToLocale, numberToLocale } from "../commonFunction/stringControl";

export class OrderBookStore {
  @observable orderBookList = observable.map<string, Array<IOrderBookItem>>([
    [ORDERBOOK.bid, observable.array<IOrderBookItem>()],
    [ORDERBOOK.ask, observable.array<IOrderBookItem>()]
  ]);
  @observable askTotalSize : string = "";
  @observable bidTotalSize : string = "";
  interval:number = 0;

  constructor() {
    this.init();
  }

  public setIntervalOrderBookData = async(market: string) => {
    await this.getOrderBookData(market);
    this.interval = setInterval(() => this.getOrderBookData(market), 60000);
  }

  public clearIntervalOrderBookData = () => {
    clearInterval(this.interval);
  }

  private getOrderBookData = async(market: string) => {
    return await publicAPI.getOrderBook(market)
    .then((data: IOrderBook) => {
      console.warn("이벤트 실행")
      let askSpliceArr: Array<string>;
      let bidSpliceArr: Array<string>;
      let askSize: number = 0;
      let bidSize: number = 0;

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

        askSize += Number(askSpliceArr[i][1]);
        this.orderBookList.get(ORDERBOOK.ask)![i] = askData;
      }

      for (const i in bidSpliceArr){
        const bidData : IOrderBookItem = {
          price: stringToLocale(bidSpliceArr[i][0], MARKETDECIMALINFO[market].price),
          amount: stringToLocale(bidSpliceArr[i][1], MARKETDECIMALINFO[market].amount),
          temp: bidSpliceArr[i][2],
        }

        bidSize += Number(bidSpliceArr[i][1]);
        this.orderBookList.get(ORDERBOOK.bid)![i] = bidData;
      }

      this.askTotalSize = numberToLocale(askSize, 2);
      this.bidTotalSize = numberToLocale(bidSize, 2);
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