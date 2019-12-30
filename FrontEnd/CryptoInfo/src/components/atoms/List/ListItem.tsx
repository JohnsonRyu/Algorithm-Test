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

interface IListItemProps extends IComponentProps {
  _outer?: IOuterType;
  _inner?: IInnerType;
  _content_align?: IContentAlignType;

  _width?: string;
  _height?: string;
  _background_color?: string;
  _orderBook?: boolean;
}

const CustomStyledListItem = ({ className, ...props }: IListItemProps) => (
  <li
    className={className}
  >
    {props.children}
  </li>
);

const StyledListItem = styled(CustomStyledListItem)`
  ${props => props._outer && outerStyling(props._outer)}
  ${props => props._inner && innerStyling(props._inner)}
  ${props => props._content_align && contentAlignStyling(props._content_align)}

  background-color: ${props => props._background_color};
  width: ${props => props._width};
  height: ${props => props._height};

  ${props =>
    props._orderBook === true &&
    css`
      margin-bottom: 1px;
      height: 40px;
      line-height: 38px;
  `};
`;

export const ListItem = (props: IListItemProps) => (
  <StyledListItem
    _outer={props._outer}
    _inner={props._inner}
    _content_align={props._content_align}
    _width={props._width}
    _height={props._height}
    _background_color={props._background_color}
    _orderBook={props._orderBook}
  >
    {props.children}
  </StyledListItem>
);
