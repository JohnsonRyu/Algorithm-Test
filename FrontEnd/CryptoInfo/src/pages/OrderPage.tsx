import React, { Component, Fragment } from "react";
import queryString from "query-string";
import { RouteComponentProps } from "react-router-dom";

import { OrderBookAsk } from "../components/molecules/OrderBookAsk";
import { OrderBookBid } from "../components/molecules/OrderBookBid";
import { publicAPI } from "../api/publicAPI";

export class OrderPage extends Component<RouteComponentProps> {
  
  componentDidMount() {
    const query = queryString.parse(this.props.location.search);

    publicAPI.getOrderBook(query.code as string);
  }

  render() {
    return(
      <Fragment>
        <OrderBookAsk/>
        <OrderBookBid/>
      </Fragment>
    )
  }
}