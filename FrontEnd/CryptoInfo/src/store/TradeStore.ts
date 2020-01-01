import { observable } from "mobx";

import { publicAPI } from "../api/publicAPI";
import { TimeType } from "../constants/types";
import { ITransaction } from "../constants/interfaces";
import { stringToLocale } from "../commonFunction/stringControl";
import { MARKETDECIMALINFO } from "../constants/marketInfo";

export class TradeStore {
  @observable transactionsData = Array<ITransaction>();
  
  public getTransactionsData = async(market: string, time: TimeType) => {
    return await publicAPI.getTransactionsData(market, time)
    .then((data: Array<ITransaction>) => {
      // 웹소켓이 아니기 때문에 day로 받아옵니다.
      if(data.length > 10) {
        data = data.splice(0, 10);
      }

      for (const i in data){
        const tempData : ITransaction = {
          timestamp: data[i].timestamp,
          tid: data[i].tid,
          price: stringToLocale(data[i].price, MARKETDECIMALINFO[market].price),
          amount: stringToLocale(data[i].amount, MARKETDECIMALINFO[market].amount),
          type: data[i].type
        }

        this.transactionsData.push(tempData);
      }
    });
  }
}