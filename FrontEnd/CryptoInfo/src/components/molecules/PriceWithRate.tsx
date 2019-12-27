import React, { Component } from "react";

import { Container } from "../atoms/Container";
import { Text } from "../atoms/Text";
import { ChangeType } from "../../constants/types";

interface IPriceWithRateProps {
  price?: string;
  marketUnit?: string;
  changePercent?: string;
  color?: string;
  arrow?: string;
}

export class PriceWithRate extends Component<IPriceWithRateProps> {
  render() {
    return (
      <Container>
        <Text _color={this.props.color}>{this.props.price}</Text>
        <span>&nbsp;</span>
        <Text _color={this.props.color}>{this.props.marketUnit}</Text>
        <span>&nbsp;</span>
        <Text _color={this.props.color}>{this.props.arrow}</Text>
        <span>&nbsp;</span>
        <Text _color={this.props.color}>{`${this.props.changePercent}%`}</Text>
      </Container>
    );
  }
}
