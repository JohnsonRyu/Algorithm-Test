import React, { Component, Fragment } from "react";
import { observer, inject } from "mobx-react";

import { CustomTab } from "../../components/molecules/CustomTab";
import { ITabType, IMarketItemInfo } from "../../constants/interfaces";
import { MarketItem } from "./MarketItem";
import { publicAPI } from "../../api/publicAPI";
import { MarketStore } from "../../store/MarketStore";
import { STORE } from "../../constants/stores";

interface IMarketListProps {
  marketStore?: MarketStore;
}

@inject(STORE.marketStore)
@observer
export class MarketList extends Component<IMarketListProps> {

  tabs: ITabType[] = [
    { menuName: "KRW", render: () => <Fragment>{this.marketListRender()}</Fragment>},
    { menuName: "USDC", render: () => <div>USDC</div>  },
  ];

  marketListRender = () => {
    return this.props.marketStore!.marketItemInfo.map((data: IMarketItemInfo) => (
      <MarketItem
        key={data.symbol}
        marketItemInfo={data}
      />
    ));
  }

  render() {
    publicAPI.getMarketDetailed();
    return(
      <CustomTab tabs={this.tabs} />
    )
  }
}