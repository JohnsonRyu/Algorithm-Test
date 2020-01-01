import React, { Component, Fragment } from "react";
import { observable } from "mobx";
import { observer, inject } from "mobx-react";

import { MarketItem } from "../components/organisms/MarketItem";
import { MarketInfoLine } from "../components/organisms/MarketInfoLine";
import { CustomTab } from "../components/molecules/CustomTab";
import { Loading } from "../components/molecules/Loading";
import { ITabType, IMarketItemInfo } from "../constants/interfaces";
import { STORE } from "../constants/stores";
import { MARKET } from "../constants/texts";
import { MarketType } from "../constants/types";
import { MarketStore } from "../store/MarketStore";

interface IMarketListProps {
  marketStore?: MarketStore;
}

@inject(STORE.marketStore)
@observer
export class MarketPage extends Component<IMarketListProps> {
  @observable isLoading: boolean = true;

  componentDidMount= async() => {
    this.props.marketStore!.setCurMarket("KRW");
    await this.props.marketStore!.getMarketDetailedAll();
    this.isLoading = false;
  }

  tabs: ITabType[] = [
    { menuName: "KRW", render: () => <Fragment>{this.marketListRender(MARKET.krw)}</Fragment> },
    { menuName: "USDC", render: () => <Fragment>{this.marketListRender(MARKET.usdc)}</Fragment> },
  ];

  tabOnClick = (market: string) => {
    this.props.marketStore!.setCurMarket(market as MarketType);
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
          this.isLoading ? <Loading/> :
          <CustomTab tabs={this.tabs} onClick={this.tabOnClick}>
            <MarketInfoLine curMarketCount={this.props.marketStore!.getMarketCoinCount(this.props.marketStore!.curMarket)} />
          </CustomTab>
        }
      </Fragment>
      
    )
  }
}