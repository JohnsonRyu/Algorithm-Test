import React, { Component } from "react";

import { List, ListItem } from "../atoms/List";
import { Text } from "../atoms/Text";
import { Container } from "../atoms/Container";
import { THEME } from "../../constants/colors";
import { OrderBookStore } from "../../store/OrderBookStore";
import { inject, observer } from "mobx-react";
import { STORE } from "../../constants/stores";
import { ORDERBOOK } from "../../constants/texts";
import { IOrderBookItem } from "../../constants/interfaces";

interface IOrderBookBidProps {
  orderBookStore?: OrderBookStore;
}

@inject(STORE.orderBookStore)
@observer
export class OrderBookBid extends Component<IOrderBookBidProps> {
  render() {
    return (
      <Container _content_align="align-end">
        <Container _width="33.3%" _inner="small" _font_size="10px" _line_height="16px">
          <Text>Temp</Text>
        </Container>
        <List _width="66.7%" _outer="compact" _inner="compact">
          {this.props.orderBookStore!.orderBookList.get(ORDERBOOK.bid)!.map((data: IOrderBookItem, key: number) => (
            <ListItem key={key} _content_align="center" _orderBook>
              <Text 
                _background_color={THEME.basic.bidBackground}
                _flex={1}
                _orderBookPrice
                _color={THEME.basic.bidText}
                _marginRight="1px"
                _inner="column-small"
                _textAlign="center"
              >
                {data.price}
              </Text>
              <Text
                _background_color={THEME.basic.bidBackground}
                _flex={1}
                _orderBookAmount
                _inner="column-small"
                _textAlign="left"
              >
                {data.amount}
              </Text>
            </ListItem>
          ))}
        </List>
      </Container>
    );
  }
}
