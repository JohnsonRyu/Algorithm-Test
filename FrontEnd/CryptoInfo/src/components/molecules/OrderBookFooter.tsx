import React from "react";

import { Container } from "../atoms/Container";
import { ORDERBOOKTEXT } from "../../constants/texts";

interface IOrderBookFooterProps {
  askTotalSize: string;
  bidTotalSize: string;
}

export const OrderBookFooter = (props: IOrderBookFooterProps) => (
  <Container _footer>
    <Container _width="33.32%" _orderFooter>{props.askTotalSize}</Container>
    <Container _width="33.34%" _orderFooter>{ORDERBOOKTEXT.KOR.footer}</Container>
    <Container _width="33.34%" _orderFooter>{props.bidTotalSize}</Container>
  </Container>
)