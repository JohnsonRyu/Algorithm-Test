import { MarketStore } from "./MarketStore";
import { OrderBookStore } from "./OrderBookStore";
import { TradeStore } from "./TradeStore";

export class Store {
  marketStore: MarketStore;
  orderBookStore: OrderBookStore;
  tradeStore: TradeStore;

  constructor() {
    this.marketStore = new MarketStore();
    this.orderBookStore = new OrderBookStore();
    this.tradeStore = new TradeStore();
  }
}

export const rootStore = new Store();
