import React from "react";

import styled, { css } from "styled-components";

import { IComponentProps } from "../../../constants/types";
import { THEME } from "../../../constants/colors";
import {
  IInnerType,
  innerStyling,
} from "../../../constants/styles";

interface ITextProps extends IComponentProps {
  _inner?: IInnerType;
  
  _color?: string;
  _bold?: boolean;
  _badge?: boolean;
  _width?: string;
  _height?: string;
  _background_color?: string;
  _flex?: number;
  _orderBookPrice?: boolean;
  _orderBookAmount?: boolean;
  _marginRight?: string;
  _textAlign?: string;
}

const CustomStyledText = ({ className, ...props }: ITextProps) => (
  <span
    className={className}
  >
    {props.children}
  </span>
);

const StyledText = styled(CustomStyledText)`
  ${props => props._inner && innerStyling(props._inner)}

  color: ${props => props._color};
  width: ${props => props._width};
  height: ${props => props._height};
  background-color: ${props => props._background_color};
  flex: ${props => props._flex};
  margin-right: ${props => props._marginRight};
  text-align: ${props => props._textAlign};

  ${props =>
    props._bold === true &&
    css`
      font-weight: bold;
  `};

  ${props =>
    props._badge === true &&
    css`
      min-width: 30px;
      padding: 0 5px;
      margin: 0 5px;
      height: 20px !important;
      border-radius: 10px;
      background-color: ${THEME.basic.menuBadgeGrey};
      font-size: 13px;
      font-weight: 500;
      color: ${THEME.basic.menuBadgeTextGrey};
  `};

  ${props =>
    props._orderBookPrice === true &&
    css`
      font-size: 14px;
      font-weight: 500;
      border: solid 1px transparent;
  `};

  ${props =>
    props._orderBookAmount === true &&
    css`
      font-size: 13px;
      font-weight: normal;
      border: solid 1px transparent;
  `};
`;

export const Text = (props: ITextProps) => (
  <StyledText 
    _inner={props._inner}
    _color={props._color}
    _bold={props._bold}
    _badge={props._badge}
    _width={props._width}
    _height={props._height}
    _background_color={props._background_color}
    _flex={props._flex}
    _orderBookPrice={props._orderBookPrice}
    _orderBookAmount={props._orderBookAmount}
    _marginRight={props._marginRight}
    _textAlign={props._textAlign}
    >
    {props.children}
  </StyledText>
);
