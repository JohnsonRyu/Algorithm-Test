import React, { Component } from "react";

import { List, ListItem } from "../atoms/List";
import { Text } from "../atoms/Text";
import { Container } from "../atoms/Container";
import { THEME } from "../../constants/colors";

interface IOrderBookAskProps {
}

const data = Array(15)
  .fill(1)
  .map(() => {
    return {
      price: "8,463,000",
      amount: "0.30420000"
    };
  });

export class OrderBookAsk extends Component<IOrderBookAskProps> {
  render() {
    return (
      <Container _content_align="align-end">
        <List _width="66.7%" _outer="compact" _inner="compact">
          {data.map((d: any, i: number) => (
            <ListItem key={i} _content_align="center" _orderBook>
              <Text _background_color={THEME.basic.askBackground} _flex={1} _orderBookAmount _marginRight="1px" _inner="column-small" _textAlign="right">{d.price}</Text>
              <Text _background_color={THEME.basic.askBackground} _flex={1} _orderBookPrice _color={THEME.basic.askText} _inner="column-small" _textAlign="center">{d.amount}</Text>
            </ListItem>
          ))}
        </List>
        <Container _width="33.3%" _inner="small" _font_size="10px" _line_height="16px">
          <Text>Temp</Text>
        </Container>
      </Container>
    );
  }
}
