import React, { Component } from "react";

import { Container } from "../atoms/Container";
import { Text } from "../atoms/Text";
import { THEME } from "../../constants/colors";
import { MARKETLISTTEXT } from "../../constants/texts";
import { MARKETLISTSIZE } from "../../constants/sizes";

interface IMarketInfoLineProps {
  curMarketCount: number;
  curFilter?: string;
}

export class MarketInfoLine extends Component<IMarketInfoLineProps> {
  render() {
    return(
        <Container _inner="column-middle" _height={MARKETLISTSIZE.infoLine.y} _background_color={THEME.basic.menuGrey}  _content_align="space-between-center" _borderBottom>
          <Container>
            <Text _bold>{MARKETLISTTEXT.KOR.infoLine}</Text>
            <Text _badge>{this.props.curMarketCount}</Text>
          </Container>
        </Container>
    )
  }
}