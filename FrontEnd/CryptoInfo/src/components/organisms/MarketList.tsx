import React, { Component, Fragment } from "react";
import { observer, inject } from "mobx-react";

import { CustomTab } from "../../components/molecules/CustomTab";
import { ITabType, IMarketItemInfo } from "../../constants/interfaces";
import { MarketItem } from "./MarketItem";
import { MarketStore } from "../../store/MarketStore";
import { STORE } from "../../constants/stores";
import { MARKET } from "../../constants/texts";

interface IMarketListProps {
  marketStore?: MarketStore;
}

@inject(STORE.marketStore)
@observer
export class MarketList extends Component<IMarketListProps> {

  componentDidMount() {
    this.props.marketStore!.getMarketDetailed();
  }

  tabs: ITabType[] = [
    { menuName: "KRW", render: () => <Fragment>{this.marketListRender(MARKET.krw)}</Fragment> },
    { menuName: "USDC", render: () => <Fragment>{this.marketListRender(MARKET.usdc)}</Fragment> },
  ];

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
      <CustomTab tabs={this.tabs} />
    )
  }
}