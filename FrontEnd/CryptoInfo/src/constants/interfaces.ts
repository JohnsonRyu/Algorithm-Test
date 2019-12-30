import { ChangeType } from "./types";

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

export interface IOrderBookParam {
  currency_pair: string;
}