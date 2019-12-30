import React from "react";
import queryString from "query-string";
import { RouteComponentProps } from "react-router-dom";

import styled from "styled-components";

const OrderbookUl = styled.ul`
  width: 66.7%;
  padding-left: 0;
  color: #000;
  text-shadow: none;
  margin: 0;
`;

const OrderbookLi = styled.li`
  margin-bottom: 1px;
  display: flex;
  height: 40px;
  line-height: 38px;
  text-align: center;
`;

const OrderBookAmountSpan = styled.span`
  position: relative;
  color: #000000;
  font-size: 13px;
  font-weight: normal;
  flex: 1;
  padding: 0 10px;
  border: solid 1px transparent;
  margin-right: 1px;
  background-color: #e7ecff;
`;

const OrderBookPriceSpan = styled.span`
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  flex: 1;
  padding: 0 10px;
  border: solid 1px transparent;
  color: #3e67f1;
  background-color: #e7ecff;
`;

const RigthDetailContainer = styled.div`
  width: 33.3%;
  padding: 4px;
  font-size: 10px;
  line-height: 16px;
`;

const Containerz = styled.div`
 align-items: flex-end;
 display: flex;
`;

const TempDl = styled.dl`
    display: flex;
    justify-content: space-between;
    white-space: nowrap;
`;
const OrderPage = (props: RouteComponentProps) => {
  const query = queryString.parse(props.location.search);
  console.warn(query);
  console.warn(props.location);

  return (
      <Containerz>
        <OrderbookUl>
          <OrderbookLi>
            <OrderBookAmountSpan>0.30420000</OrderBookAmountSpan>
            <OrderBookPriceSpan>8,463,000</OrderBookPriceSpan>
          </OrderbookLi>
          <OrderbookLi>
            <OrderBookAmountSpan>0.30420000</OrderBookAmountSpan>
            <OrderBookPriceSpan>8,463,000</OrderBookPriceSpan>
          </OrderbookLi>
          <OrderbookLi>
            <OrderBookAmountSpan>0.30420000</OrderBookAmountSpan>
            <OrderBookPriceSpan>8,463,000</OrderBookPriceSpan>
          </OrderbookLi>
        </OrderbookUl>
        <RigthDetailContainer>
          <TempDl>
            <dt>거래량</dt>
            <dd>103 BTC</dd>
          </TempDl>
          <hr />
        </RigthDetailContainer>
      </Containerz>
  );
}

export default OrderPage