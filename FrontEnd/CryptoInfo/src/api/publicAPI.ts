import { RequestAPI } from "./requestAPI";
import { SERVER_API_HOST } from "../constants/api";
import { IOrderBookParam, ITransactionParam, IMarketDetailParam } from "../constants/interfaces";
import { TimeType } from "../constants/types";

class PublicAPI {
  private BASE_URL: string = `${SERVER_API_HOST}`;
  private api: RequestAPI;

  constructor() {
    this.api = new RequestAPI(this.BASE_URL);
  }

  public getMarketDetailed = async (currencyPair: string) => {
    const parameter: IMarketDetailParam = {
      currency_pair: currencyPair
    };
    return this.api
      .publicRequest(`/ticker/detailed`, "get", parameter)
      .then((response) => {
        return response.data;
      })
      .catch(error => {
        console.error("ERROR:: getMarketDetailed", error);
      });
  };

  public getMarketDetailedAll = async () => {
    return this.api
      .publicRequest(`/ticker/detailed/all`, "get")
      .then((response) => {
        return response.data;
      })
      .catch(error => {
        console.error("ERROR:: getMarketDetailedAll", error);
      });
  };

  public getOrderBook = async (currencyPair: string) => {
    const parameter: IOrderBookParam = {
      currency_pair: currencyPair
    };
    return this.api
      .publicRequest(`/orderbook`, "get", parameter)
      .then((response) => {
        return response.data;
      })
      .catch(error => {
        console.error("ERROR:: getOrderBook", error);
      });
  };

  public getTransactionsData = async (currencyPair: string, time: TimeType) => {
    const parameter: ITransactionParam = {
      currency_pair: currencyPair,
      time: time
    };
    return this.api
      .publicRequest(`/transactions`, "get", parameter)
      .then((response) => {
        return response.data;
      })
      .catch(error => {
        console.error("ERROR:: getTransactionsData", error);
      });
  };
}

export const publicAPI = new PublicAPI();

