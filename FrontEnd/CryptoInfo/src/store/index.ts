import { MarketStore } from "./MarketStore";
import { OrderBookStore } from "./OrderBookStore";

export class Store {
  marketStore: MarketStore;
  orderBookStore: OrderBookStore;

  constructor() {
    this.marketStore = new MarketStore();
    this.orderBookStore = new OrderBookStore();
  }
}

export const rootStore = new Store();
