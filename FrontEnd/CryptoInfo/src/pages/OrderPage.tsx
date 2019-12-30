import React from "react";
import queryString from "query-string";
import { RouteComponentProps } from "react-router-dom";

import { OrderBookSell } from "../components/molecules/OrderBookSell";

// const RigthDetailContainer = styled.div`
//   width: 33.3%;
//   padding: 4px;
//   font-size: 10px;
//   line-height: 16px;
// `;

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
        <OrderBookSell/>
  );
}

export default OrderPage