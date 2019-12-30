import React, { Fragment } from "react";
import queryString from "query-string";
import { RouteComponentProps } from "react-router-dom";

import { OrderBookAsk } from "../components/molecules/OrderBookAsk";
import { OrderBookBid } from "../components/molecules/OrderBookBid";

const OrderPage = (props: RouteComponentProps) => {
  const query = queryString.parse(props.location.search);
  console.warn(query);
  console.warn(props.location);

  return (
    <Fragment>
      <OrderBookAsk/>
      <OrderBookBid/>
    </Fragment>
  );
}

export default OrderPage