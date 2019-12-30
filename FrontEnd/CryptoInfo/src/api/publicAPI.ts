import { RequestAPI } from "./requestAPI";
import { SERVER_API_HOST } from "../constants/api";
import { IOrderBookParam } from "../constants/interfaces";

class PublicAPI {
  private BASE_URL: string = `${SERVER_API_HOST}`;
  private api: RequestAPI;

  constructor() {
    this.api = new RequestAPI(this.BASE_URL);
  }

  public getMarketDetailed = async () => {
    return this.api
      .publicRequest(`/ticker/detailed/all`, "get")
      .then((response) => {
        return response.data;
      })
      .catch(error => {
        console.error("ERROR:: getMarketDetailed", error)
      });
  };

  public getOrderBook = async (param: string) => {
    const parameter: IOrderBookParam = {
      currency_pair: param
    };

    return this.api
      .publicRequest(`/orderbook`, "get", parameter)
      .then((response) => {
        return console.warn(response.data);
      })
      .catch(error => {
        console.error("ERROR:: getOrderBook", error)
      });
  };
}

export const publicAPI = new PublicAPI();

