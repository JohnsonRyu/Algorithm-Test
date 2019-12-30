import React, { Component } from "react";

import { List, ListItem } from "../atoms/List";
import { Text } from "../atoms/Text";
import { Container } from "../atoms/Container";
import { THEME } from "../../constants/colors";

interface IOrderBookBidProps {

}

const data = Array(15)
  .fill(1)
  .map(() => {
    return {
      price: "8,463,000",
      amount: "0.30420000"
    };
  });

export class OrderBookBid extends Component<IOrderBookBidProps> {
  render() {
    return (
      <Container _content_align="align-end">
        <Container _width="33.3%" _inner="small" _font_size="10px" _line_height="16px">
          <Text>Temp</Text>
        </Container>
        <List _width="66.7%" _outer="compact" _inner="compact">
          {data.map((d: any, i: number) => (
            <ListItem key={i} _content_align="center" _orderBook>
              <Text 
                _background_color={THEME.basic.bidBackground}
                _flex={1}
                _orderBookPrice
                _color={THEME.basic.bidText}
                _marginRight="1px"
                _inner="column-small"
                _textAlign="center"
              >
                {d.amount}
              </Text>
              <Text
                _background_color={THEME.basic.bidBackground}
                _flex={1}
                _orderBookAmount
                _inner="column-small"
                _textAlign="left"
              >
                {d.price}
              </Text>
            </ListItem>
          ))}
        </List>
      </Container>
    );
  }
}
