import React, { Component } from "react";

import { CustomTab } from "../../components/molecules/CustomTab";
import { ITabType } from "../../constants/interfaces";
import { Search } from "../atoms/Search";

export class MarketList extends Component {
  tabs: ITabType[] = [
    { menuName: "KRW", render: () => <div>KRW</div> },
    { menuName: "USDC", render: () => <div>USDC</div>  },
  ];

  render() {
    return(
      <CustomTab tabs={this.tabs}>
        <Search
          placeholder="코인을 검색해 보세요."
          fluid
          input={{ fluid: true }}
          open={false}
          _square
        />
      </CustomTab>
    )
  }
}