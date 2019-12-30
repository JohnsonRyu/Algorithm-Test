import React, { Component, Fragment } from "react";
import queryString from "query-string";
import { RouteComponentProps } from "react-router-dom";
import { inject, observer } from "mobx-react";

import { OrderBookAsk } from "../components/molecules/OrderBookAsk";
import { OrderBookBid } from "../components/molecules/OrderBookBid";
import { OrderBookStore } from "../store/OrderBookStore";
import { STORE } from "../constants/stores";

interface IOrderPageProps extends RouteComponentProps {
  orderBookStore?: OrderBookStore;
}

@inject(STORE.orderBookStore)
@observer
export class OrderPage extends Component<IOrderPageProps> {
  
  componentDidMount() {
    const query = queryString.parse(this.props.location.search);

    this.props.orderBookStore!.getOrderBookData(query.code as string);
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