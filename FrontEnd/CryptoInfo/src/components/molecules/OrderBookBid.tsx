import React, { Component, Fragment } from "react";
import { inject, observer } from "mobx-react";

import { Container } from "../atoms/Container";
import { DefinitionData, DefinitionTitle, Definition } from "../atoms/Definition";
import { List, ListItem } from "../atoms/List";
import { Text } from "../atoms/Text";
import { THEME } from "../../constants/colors";
import { STORE } from "../../constants/stores";
import { ORDERBOOK, ORDERBOOKTEXT } from "../../constants/texts";
import { IOrderBookItem, ITransaction } from "../../constants/interfaces";
import { ORDERPAGE } from "../../constants/sizes";
import { OrderBookStore } from "../../store/OrderBookStore";
import { TradeStore } from "../../store/TradeStore";

interface IOrderBookBidProps {
  orderBookStore?: OrderBookStore;
  tradeStore?: TradeStore;
}

@inject(STORE.orderBookStore, STORE.tradeStore)
@observer
export class OrderBookBid extends Component<IOrderBookBidProps> {
  render() {
    return (
      <Container _content_align="base-line" _margin_bottom={ORDERPAGE.footer.y}>
        <Definition _width="33.3%" _outer="compact" _inner="small" _font_size="10px" _line_height="16px">
          <DefinitionTitle _margin_bottom="10px" _font_weight="bold">
            {ORDERBOOKTEXT.KOR.tradeTitle}
          </DefinitionTitle>
          <Fragment>
            {this.props.tradeStore!.transactionsData.map((data: ITransaction) => {
              let color;
              if(data.type === "buy") color = THEME.basic.priceRise;
              else color = THEME.basic.priceFall;
              return(
                  <DefinitionData 
                  key={data.timestamp}
                  _outer="compact"
                  _content_align="justify-space-between"
                  _margin_bottom="4px"
                >
                  <Text>{data.price}</Text>
                  <Text _color={color}>{data.amount}</Text>
                </DefinitionData>
              )
            })}
          </Fragment>
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
