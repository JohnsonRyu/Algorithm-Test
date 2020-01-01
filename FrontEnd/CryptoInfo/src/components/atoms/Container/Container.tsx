import React from "react";

import styled, { css } from "styled-components";

import { IComponentProps } from "../../../constants/types";
import {
  IOuterType,
  IInnerType,
  IContentAlignType,
  outerStyling,
  innerStyling,
  contentAlignStyling
} from "../../../constants/styles";
import { THEME } from "../../../constants/colors";
import { ORDERPAGE } from "../../../constants/sizes";

interface IContainerProps extends IComponentProps {
  _outer?: IOuterType;
  _inner?: IInnerType;
  _content_align?: IContentAlignType;

  _width?: string;
  _height?: string;
  _orderFooter?: boolean;
  _borderBottom?: boolean;
  _header?: boolean;
  _body?: boolean;
  _footer?: boolean;
  _background_color?: string;
  _font_size?: string;
  _line_height?: string;
  _margin_top?: string;
  _margin_bottom?: string;
}

const CustomStyledContainer = ({ className, ...props }: IContainerProps) => (
  <div
    className={className}
  >
    {props.children}
  </div>
);

const StyledContainer = styled(CustomStyledContainer)`
  ${props => props._outer && outerStyling(props._outer)}
  ${props => props._inner && innerStyling(props._inner)}
  ${props => props._content_align && contentAlignStyling(props._content_align)}

  background-color: ${props => props._background_color};
  width: ${props => props._width};
  height: ${props => props._height};
  font-size: ${props => props._font_size};
  line-height: ${props => props._line_height};
  margin-top: ${props => props._margin_top};
  margin-bottom: ${props => props._margin_bottom};

  ${props =>
    props._orderFooter === true &&
    css`
      border-left: 1px solid ${THEME.basic.borderDarkGrey};
      border-top: 1px solid ${THEME.basic.borderDarkGrey};
      line-height: 40px;
      font-size: 14px;
      font-weight: 500;
      text-align: center;
      background-color: ${THEME.basic.borderBackgroundGrey};
  `};

  ${props =>
    props._borderBottom === true &&
    css`
      border-bottom: 1px solid ${THEME.basic.containerBorder};
  `};

  ${props =>
    props._header === true &&
    css`
      position: fixed;
      top: 0;
      width: 100%;
      box-sizing: border-box;
  `};

  ${props =>
    props._body === true &&
    css`
      margin-top: 40px;
  `};

  ${props =>
    props._footer === true &&
    css`
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      display: flex;
      height: ${ORDERPAGE.footer.y};
  `};
`;

export const Container = (props: IContainerProps) => (
  <StyledContainer
    _outer={props._outer}
    _inner={props._inner}
    _content_align={props._content_align}
    _width={props._width}
    _height={props._height}
    _orderFooter={props._orderFooter}
    _borderBottom={props._borderBottom}
    _header={props._header}
    _body={props._body}
    _footer={props._footer}
    _background_color={props._background_color}
    _font_size={props._font_size}
    _line_height={props._line_height}
    _margin_top={props._margin_top}
    _margin_bottom={props._margin_bottom}
  >
    {props.children}
  </StyledContainer>
);
