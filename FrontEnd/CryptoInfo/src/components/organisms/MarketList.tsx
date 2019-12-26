import React, { Component } from "react";

import { CustomTab } from "../../components/molecules/CustomTab";
import { ITabType } from "../../constants/interfaces";

export class MarketList extends Component {
  tabs: ITabType[] = [
    { menuName: "KRW", render: () => <div>KRW</div> },
    { menuName: "USDC", render: () => <div>USDC</div>  },
  ];

  render() {
    return(
      <CustomTab tabs={this.tabs} />
    )
  }
}