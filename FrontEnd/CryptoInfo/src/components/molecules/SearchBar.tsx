import React from "react";
import { Icon } from "semantic-ui-react";

import { Container } from "../atoms/Container";
import { Input } from "../atoms/Input";
import { MARKETLISTTEXT } from "../../constants/texts";

export const SearchBar = () => (
  <Container _height="60px" _content_align="center" _borderBottom>
    <Container _width="60px" _content_align="center">
      <Icon name="search" size="large"/>
    </Container>
    <Container _width="255px" _content_align="center">
      <Input _width="100%" _outline_clear placeholder={MARKETLISTTEXT.KOR.inputDefault}/>
    </Container>
    <Container _width="65px" _content_align="center">
      <Icon name="cancel" size="large"/>
    </Container>
  </Container>
)