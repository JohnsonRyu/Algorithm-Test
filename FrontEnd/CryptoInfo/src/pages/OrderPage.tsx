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
import { MARKETINFO } from "../constants/marketInfo";
import { ORDERBOOKTEXT } from "../constants/texts";
import { OrderBookStore } from "../store/OrderBookStore";
import { TradeStore } from "../store/TradeStore";
import { MarketStore } from "../store/MarketStore";
import { OrderBookFooter } from "../components/molecules/OrderBookFooter";

interface IOrderPageProps extends RouteComponentProps {
  orderBookStore?: OrderBookStore;
  tradeStore?: TradeStore;
  marketStore?: MarketStore;
}

@inject(STORE.orderBookStore, STORE.tradeStore, STORE.marketStore)
@observer
export class OrderPage extends Component<IOrderPageProps> {
  @observable isLoading: boolean = true;
  query = queryString.parse(this.props.location.search);


  constructor(props: IOrderPageProps) {
    super(props);

    this.props.tradeStore!.init();

  }
  
  componentDidMount = async() => {
    await this.props.marketStore!.getMarketDetailed(this.query.code as string);
    await this.props.orderBookStore!.getOrderBookData(this.query.code as string);
    await this.props.tradeStore!.getTransactionsData(this.query.code as string, "day");
    this.isLoading = false;
  }

  arrowEvent = () => {
    this.props.history.push('/');
  }

  orderBookRender = () => {
    return(
      <Fragment>
        <TopNavHeader
          title={MARKETINFO[this.query.code as string].koreanName + " " + ORDERBOOKTEXT.KOR.priceList}
          onClick={this.arrowEvent} />
        <Container _margin_top={MARKETLISTSIZE.navTopHeader.y}>
          <OrderBookAsk/>
          <OrderBookBid/>
          <OrderBookFooter/>
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