import { RequestAPI } from "./requestAPI";
import { SERVER_API_HOST } from "../constants/api";
import { ICoinDetailed } from "../constants/interfaces";

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
        const data: ICoinDetailed = response.data;

        console.log(data);
      });
  };
}

export const publicAPI = new PublicAPI();
