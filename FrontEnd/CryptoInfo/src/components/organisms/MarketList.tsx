import React, { Component, Fragment } from "react";
import { observable } from "mobx";
import { observer } from "mobx-react";

import { CustomTab } from "../../components/molecules/CustomTab";
import { ITabType, IMarketItemInfo, ICoinInfo } from "../../constants/interfaces";
import { MarketItem } from "./MarketItem";
import { MARKETINFO } from "../../constants/marketInfo";

@observer
export class MarketList extends Component {

  @observable marketItemInfo : IMarketItemInfo[] = [];

  tabs: ITabType[] = [
    { menuName: "KRW", render: () => <Fragment>{this.marketListRender()}</Fragment>},
    { menuName: "USDC", render: () => <div>USDC</div>  },
  ];

  componentDidMount() {
    this.marketItemInfo = this.temp();
  }

  temp = () => {
    return MARKETINFO.KRW.map((data: ICoinInfo) => {
      const info: IMarketItemInfo = {
        ...data,
        timestamp: 1577365310583,
        last: "52.2",
        open: "55",
        bid: "51.7",
        ask: "52.2",
        low: "51.6",
        high: "55",
        volume: "586236.187707313636363636",
        change: "-2.8",
        changePercent: "-2.4",
        changeType: "FALL"
      }
      return info;
    })
  }

  marketListRender = () => {
    return this.marketItemInfo.map((data: IMarketItemInfo) => (
      <MarketItem
        key={data.symbol}
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