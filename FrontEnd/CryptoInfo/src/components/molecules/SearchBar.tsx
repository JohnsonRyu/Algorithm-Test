import React from "react";

import { Container } from "../atoms/Container";
import { Icon } from "semantic-ui-react";

export const SearchBar = () => (
  <Container _height="60px" _content_align="center">
    <Container _width="60px" _content_align="center">
      <Icon name="search" size="large"/>
    </Container>
    <Container _width="255px" _content_align="center">
      <input></input>
    </Container>
    <Container _width="65px" _content_align="center">
      <Icon name="cancel" size="large"/>
    </Container>
  </Container>
)