import React, { Component } from "react";

import { Container } from "../atoms/Container";
import { TextWithUnit } from "../molecules/TextWithUnit";
import { IMarketItemInfo } from "../../constants/interfaces";

interface IMarketItemProps {
  marketItemInfo: IMarketItemInfo;
}

export class MarketItem extends Component<IMarketItemProps> {
  render() {
    return(
        <Container _inner="column-middle" _height="80px" _borderBottom>
          <TextWithUnit first={this.props.marketItemInfo.koreanName} second={this.props.marketItemInfo.symbol} />
        </Container>
    )
  }
}