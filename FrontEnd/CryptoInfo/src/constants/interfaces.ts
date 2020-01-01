import { ChangeType, TakerOrderType } from "./types";

export interface ITabType {
  menuName: string;
  render: () => JSX.Element;
}

export interface ICoinDetailed {
  timestamp: number;
  last: string;
  open: string;
  bid: string;
  ask: string;
  low: string;
  high: string;
  volume: string;
  change: string;
  changePercent: string;
}

export interface ICoinInfo {
  market: string;
  symbol: string;
  koreanName: string;
}

export interface IMarketItemInfo extends ICoinInfo, ICoinDetailed {
  changeType: ChangeType;
  code: string;
}

export interface IMarketDetailParam {
  currency_pair: string;
}

export interface IOrderBookParam {
  currency_pair: string;
}

export interface IOrderBookItem {
  price: string;
  amount: string;
  temp: string;
}

export interface IOrderBook {
  timestamp: number;
  bids: Array<string>;
  asks: Array<string>;
}

export interface IMarketDecimals {
  price: number;
  amount: number;
}

export interface ITransactionParam {
  currency_pair: string;
  time: string;
}

export interface ITransaction {
  timestamp: number;
  tid: string;
  price: string;
  amount: string;
  type: TakerOrderType;
}