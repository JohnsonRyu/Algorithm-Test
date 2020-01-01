import React, { Component } from "react";

import { List, ListItem } from "../atoms/List";
import { Text } from "../atoms/Text";
import { THEME } from "../../constants/colors";
import { OrderBookStore } from "../../store/OrderBookStore";
import { inject, observer } from "mobx-react";
import { STORE } from "../../constants/stores";
import { ORDERBOOK } from "../../constants/texts";
import { IOrderBookItem } from "../../constants/interfaces";
import { Container } from "../atoms/Container";
import { DefinitionData, DefinitionTitle, Definition } from "../atoms/Definition";

interface IOrderBookBidProps {
  orderBookStore?: OrderBookStore;
}

@inject(STORE.orderBookStore)
@observer
export class OrderBookBid extends Component<IOrderBookBidProps> {
  render() {
    return (
      <Container _content_align="base-line">
          <Definition _width="33.3%" _outer="compact" _inner="small" _font_size="10px" _line_height="16px">
            <DefinitionTitle _margin_bottom="10px" _font_weight="bold">체결내역</DefinitionTitle>
            <DefinitionData _outer="compact" _content_align="justify-space-between" _margin_bottom="4px">
              <Text>8,331,000</Text>
              <Text>0.01143763</Text>
            </DefinitionData>
            <DefinitionData _outer="compact" _content_align="justify-space-between" _margin_bottom="4px">
              <Text>8,331,000</Text>
              <Text>0.01143763</Text>
            </DefinitionData>
          </Definition>
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
