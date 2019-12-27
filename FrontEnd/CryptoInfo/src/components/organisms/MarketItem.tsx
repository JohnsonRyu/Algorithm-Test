import React, { Component } from "react";

import { Container } from "../atoms/Container";
import { Button } from "../atoms/Button";
import { TextWithUnit } from "../molecules/TextWithUnit";
import { PriceWithRate } from "../molecules/PriceWithRate";
import { IMarketItemInfo } from "../../constants/interfaces";
import { MARKETUNIT } from "../../constants/texts";
import { MarketType } from "../../constants/types";
import { THEME } from "../../constants/colors";

interface IMarketItemProps {
  marketItemInfo: IMarketItemInfo;
}

export class MarketItem extends Component<IMarketItemProps> {
  marketUnit : MarketType = "KRW";
  color: string = THEME.basic.priceEven;
  arrow: string = "-";

  constructor(props: IMarketItemProps) {
    super(props);

    if(this.props.marketItemInfo.market === "KRW") {
      this.marketUnit = "KRW";
    } else {
      this.marketUnit = "USDC";
    }

    if(this.props.marketItemInfo.changeType === "RISE") {
      this.color = THEME.basic.priceRise;
      this.arrow = "▲";
    } else if (this.props.marketItemInfo.changeType === "FALL") {
      this.color = THEME.basic.priceFall;
      this.arrow = "▼";
    }
  }

  render() {
    return(
        <Container _inner="column-middle" _height="80px" _content_align="space-between-center" _borderBottom>
          <Container>
            <TextWithUnit first={this.props.marketItemInfo.koreanName} second={this.props.marketItemInfo.symbol} space />
            <PriceWithRate price={this.props.marketItemInfo.last} marketUnit={MARKETUNIT.KOR[this.marketUnit]} changePercent={this.props.marketItemInfo.changePercent} arrow={this.arrow} color={this.color} />
          </Container>
          <Button>거래</Button>
        </Container>
    )
  }
}