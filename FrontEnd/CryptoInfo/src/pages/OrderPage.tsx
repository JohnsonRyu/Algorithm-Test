import React from "react";
import queryString from "query-string";
import { RouteComponentProps } from "react-router-dom";

import { OrderBookAsk } from "../components/molecules/OrderBookAsk";


// const TempDl = styled.dl`
//     display: flex;
//     justify-content: space-between;
//     white-space: nowrap;
// `;
const OrderPage = (props: RouteComponentProps) => {
  const query = queryString.parse(props.location.search);
  console.warn(query);
  console.warn(props.location);

  return (
        <OrderBookAsk/>
  );
}

export default OrderPage