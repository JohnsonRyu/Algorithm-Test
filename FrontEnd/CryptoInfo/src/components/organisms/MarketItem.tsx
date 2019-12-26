import React, { Component } from "react";

import { Container } from "../atoms/Container";
import { IMarketItemInfo } from "../../constants/interfaces";

interface IMarketItemProps {
  marketItemInfo: IMarketItemInfo;
}

export class MarketItem extends Component<IMarketItemProps> {
  render() {
    return(
        <Container _inner="column-middle" _height="80px">
          {this.props.marketItemInfo.koreanName}
        </Container>
    )
  }
}