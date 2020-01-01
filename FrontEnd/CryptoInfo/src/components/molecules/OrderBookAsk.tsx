import React, { Component } from "react";
import { inject, observer } from "mobx-react";

import { DefinitionTitleWithData } from "./DefinitionTitleWithData";
import { List, ListItem } from "../atoms/List";
import { Text } from "../atoms/Text";
import { Container } from "../atoms/Container";
import { THEME } from "../../constants/colors";
import { IOrderBookItem } from "../../constants/interfaces";
import { STORE } from "../../constants/stores";
import { ORDERBOOK, ORDERBOOKTEXT, MARKETUNIT } from "../../constants/texts";
import { OrderBookStore } from "../../store/OrderBookStore";
import { MarketStore } from "../../store/MarketStore";
import { MarketType } from "../../constants/types";

interface IOrderBookAskProps {
  orderBookStore?: OrderBookStore;
  marketStore?: MarketStore;
}

@inject(STORE.orderBookStore, STORE.marketStore)
@observer
export class OrderBookAsk extends Component<IOrderBookAskProps> {
  render() {
    return (
      <Container _content_align="align-end">
        <List _width="66.7%" _outer="compact" _inner="compact">
          {this.props.orderBookStore!.orderBookList.get(ORDERBOOK.ask)!.map((data: IOrderBookItem, key: number) => (
            <ListItem key={key} _content_align="center" _orderBook>
              <Text 
                _background_color={THEME.basic.askBackground}
                _flex={1}
                _orderBookAmount
                _marginRight="1px"
                _inner="column-small"
                _textAlign="right"
              >
                {data.amount}
              </Text>
              <Text
                _background_color={THEME.basic.askBackground}
                _flex={1}
                _orderBookPrice
                _color={THEME.basic.askText}
                _inner="column-small"
                _textAlign="center"
              >
                {data.price}
              </Text>
            </ListItem>
          ))}
        </List>
        <Container _width="33.3%" _inner="small" _font_size="10px" _line_height="16px">
          <DefinitionTitleWithData 
            title={ORDERBOOKTEXT.KOR.volume} 
            data ={this.props.marketStore!.curCurrencyPairData!.volume + " " + 
            this.props.marketStore!.curCurrencyPairData!.symbol}/>
          <hr />
          <DefinitionTitleWithData 
            title={ORDERBOOKTEXT.KOR.open} 
            data ={this.props.marketStore!.curCurrencyPairData!.open + " " + 
            MARKETUNIT.KOR[this.props.marketStore!.curCurrencyPairData!.market as MarketType]}/>
          <DefinitionTitleWithData 
            title={ORDERBOOKTEXT.KOR.high} 
            data ={this.props.marketStore!.curCurrencyPairData!.high + " " + 
            MARKETUNIT.KOR[this.props.marketStore!.curCurrencyPairData!.market as MarketType]}/>
          <DefinitionTitleWithData 
            title={ORDERBOOKTEXT.KOR.low} 
            data ={this.props.marketStore!.curCurrencyPairData!.low + " " + 
            MARKETUNIT.KOR[this.props.marketStore!.curCurrencyPairData!.market as MarketType]}/>
        </Container>
      </Container>
    );
  }
}
