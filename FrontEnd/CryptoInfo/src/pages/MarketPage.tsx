import React, { Component, Fragment } from "react";
import { observable } from "mobx";
import { observer, inject } from "mobx-react";
import { SyncLoader } from "react-spinners";

import { MarketItem } from "../components/organisms/MarketItem";
import { MarketInfoLine } from "../components/organisms/MarketInfoLine";
import { CustomTab } from "../components/molecules/CustomTab";
import { ITabType, IMarketItemInfo } from "../constants/interfaces";
import { STORE } from "../constants/stores";
import { MARKET } from "../constants/texts";
import { MarketStore } from "../store/MarketStore";
import { MarketType } from "../constants/types";
import { Container } from "../components/atoms/Container";
import { THEME } from "../constants/colors";

interface IMarketListProps {
  marketStore?: MarketStore;
}

@inject(STORE.marketStore)
@observer
export class MarketPage extends Component<IMarketListProps> {
  @observable isLoading: boolean = true;

  componentDidMount= async() => {
    await this.props.marketStore!.getMarketDetailed();
    this.isLoading = false;
  }

  tabs: ITabType[] = [
    { menuName: "KRW", render: () => <Fragment>{this.marketListRender(MARKET.krw)}</Fragment> },
    { menuName: "USDC", render: () => <Fragment>{this.marketListRender(MARKET.usdc)}</Fragment> },
  ];

  tabOnClick = (market: string) => {
    this.props.marketStore!.setCurMarket(market as MarketType);
  }

  loadingRender = () => {
    return (
      <Container _width="100%" _height={window.innerHeight.toFixed()+"px"} _content_align ="center">
        <SyncLoader size={20} color={THEME.basic.loading}/>
      </Container>
    )
  }

  marketListRender = (market: string) => {
    return this.props.marketStore!.marketTokenList.get(market)!.map((data: IMarketItemInfo) => (
      <MarketItem
        key={data.symbol + data.market}
        marketItemInfo={data}
      />
    ));
  }

  render() {
    return(
      <Fragment>
        {
          this.isLoading ? this.loadingRender() :
          <CustomTab tabs={this.tabs} onClick={this.tabOnClick}>
            <MarketInfoLine curMarketCount={this.props.marketStore!.getMarketCoinCount(this.props.marketStore!.curMarket)} />
          </CustomTab>
        }
      </Fragment>
      
    )
  }
}