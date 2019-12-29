export type IComponentProps = {
  children?: JSX.Element[] | JSX.Element | string | number;
  className?: string;
};

export type ChangeType = "EVEN" | "RISE" | "FALL";
export type MarketType = "KRW" | "USDC";
export type APIMethod = "get" | "post" | "put" | "delete";