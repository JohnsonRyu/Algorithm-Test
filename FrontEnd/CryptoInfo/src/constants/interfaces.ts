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
  currencyPair: string;
  market: string;
  symbol: string;
  koreanName: string;
}

export interface IMarketItemInfo extends ICoinInfo, ICoinDetailed {}