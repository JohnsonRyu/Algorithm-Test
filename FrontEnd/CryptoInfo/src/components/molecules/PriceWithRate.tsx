import React from "react";

import { Container } from "../atoms/Container";
import { Text } from "../atoms/Text";

interface IPriceWithRateProps {
  price?: string;
  marketUnit?: string;
  changePercent?: string;
  color?: string;
  arrow?: string;
}

export const PriceWithRate = (props: IPriceWithRateProps) => (
  <Container>
    <Text _color={props.color}>{props.price}</Text>
    <span>&nbsp;</span>
    <Text _color={props.color}>{props.marketUnit}</Text>
    <span>&nbsp;</span>
    <Text _color={props.color}>{props.arrow}</Text>
    <span>&nbsp;</span>
    <Text _color={props.color}>{`${props.changePercent}%`}</Text>
  </Container>
)