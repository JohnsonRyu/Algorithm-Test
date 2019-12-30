import React, { Component, Fragment } from "react";
import queryString from "query-string";
import { RouteComponentProps } from "react-router-dom";
import { observable } from "mobx";
import { inject, observer } from "mobx-react";
import { SyncLoader } from "react-spinners";

import { OrderBookAsk } from "../components/molecules/OrderBookAsk";
import { OrderBookBid } from "../components/molecules/OrderBookBid";
import { OrderBookStore } from "../store/OrderBookStore";
import { STORE } from "../constants/stores";
import { TopNavHeader } from "../components/organisms/TopNavHeader";
import { Container } from "../components/atoms/Container";
import { MARKETLISTSIZE } from "../constants/sizes";
import { THEME } from "../constants/colors";

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

  loadingRender = () => {
    return (
      <Container _width="100%" _height={window.innerHeight.toFixed()+"px"} _content_align ="center">
        <SyncLoader size={20} color={THEME.basic.loading}/>
      </Container>
    )
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
        {this.isLoading ? this.loadingRender() :
        this.orderBookRender()}
      </Fragment>
    )
  }
}