import React, { Component } from "react";
import { Icon } from "semantic-ui-react";

import { Container } from "../atoms/Container";
import { Text } from "../atoms/Text";
import { MARKETLISTTEXT } from "../../constants/texts";
import { MARKETLISTSIZE } from "../../constants/sizes";
import { THEME } from "../../constants/colors";

interface ITopNavHeaderProps {
  title: string;
  onClick?: () => void;
}

export class TopNavHeader extends Component<ITopNavHeaderProps> {
  render() {
    return(
        <Container 
          _header
          _background_color={THEME.basic.white}
          _inner="column-middle"
          _height={MARKETLISTSIZE.navTopHeader.y}
          _content_align="space-between-center"
          _borderBottom
        >
          <Icon name="arrow left" size="large" onClick={this.props.onClick}/>
          <Text _bold>{MARKETLISTTEXT.KOR.InfoLine}</Text>
          <div></div>
        </Container>
    )
  }
}