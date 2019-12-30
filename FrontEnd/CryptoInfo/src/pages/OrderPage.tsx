import React, { Component, Fragment } from "react";
import queryString from "query-string";
import { RouteComponentProps } from "react-router-dom";
import { inject, observer } from "mobx-react";

import { OrderBookAsk } from "../components/molecules/OrderBookAsk";
import { OrderBookBid } from "../components/molecules/OrderBookBid";
import { OrderBookStore } from "../store/OrderBookStore";
import { STORE } from "../constants/stores";
import { TopNavHeader } from "../components/organisms/TopNavHeader";
import { Container } from "../components/atoms/Container";
import { MARKETLISTSIZE } from "../constants/sizes";

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

  arrowEvent = () => {
    this.props.history.push('/');
  }

  render() {
    return(
      <Fragment>
        <TopNavHeader title="비트코인 호가" onClick={this.arrowEvent}/>
        <Container _margin_top={MARKETLISTSIZE.navTopHeader.y}>
          <OrderBookAsk/>
          <OrderBookBid/>
        </Container>
      </Fragment>
    )
  }
}