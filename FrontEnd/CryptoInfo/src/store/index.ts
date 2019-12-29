import { MarketStore } from "./MarketStore";

export class Store {
  marketStore: MarketStore;

  constructor() {
    this.marketStore = new MarketStore();
  }
}

export const rootStore = new Store();
