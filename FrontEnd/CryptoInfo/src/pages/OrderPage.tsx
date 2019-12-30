import React, { Component, Fragment } from "react";
import queryString from "query-string";
import { RouteComponentProps } from "react-router-dom";
import { observable } from "mobx";
import { inject, observer } from "mobx-react";

import { OrderBookAsk } from "../components/molecules/OrderBookAsk";
import { OrderBookBid } from "../components/molecules/OrderBookBid";
import { Container } from "../components/atoms/Container";
import { TopNavHeader } from "../components/organisms/TopNavHeader";
import { Loading } from "../components/molecules/Loading";
import { STORE } from "../constants/stores";
import { MARKETLISTSIZE } from "../constants/sizes";
import { OrderBookStore } from "../store/OrderBookStore";

interface IOrderPageProps extends RouteComponentProps {
  orderBookStore?: OrderBookStore;
}

@inject(STORE.orderBookStore)
@observer
export class OrderPage extends Component<IOrderPageProps> {
  @observable isLoading: boolean = true;
  
  componentDidMount = async() => {
    const query = queryString.parse(this.props.location.search);

    await this.props.orderBookStore!.getOrderBookData(query.code as string);
    this.isLoading = false;
  }

  arrowEvent = () => {
    this.props.history.push('/');
  }

  orderBookRender = () => {
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

  render() {
    return(
      <Fragment>
        {this.isLoading ? <Loading/> :
        this.orderBookRender()}
      </Fragment>
    )
  }
}