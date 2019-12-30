import React from "react";

import styled from "styled-components";

import { IComponentProps } from "../../../constants/types";
import {
  IOuterType,
  IInnerType,
  IContentAlignType,
  outerStyling,
  innerStyling,
  contentAlignStyling
} from "../../../constants/styles";

interface IListProps extends IComponentProps {
  _outer?: IOuterType;
  _inner?: IInnerType;
  _content_align?: IContentAlignType;

  _width?: string;
  _height?: string;
  _background_color?: string;
}

const CustomStyledList = ({ className, ...props }: IListProps) => (
  <ul
    className={className}
  >
    {props.children}
  </ul>
);

const StyledList = styled(CustomStyledList)`
  ${props => props._outer && outerStyling(props._outer)}
  ${props => props._inner && innerStyling(props._inner)}
  ${props => props._content_align && contentAlignStyling(props._content_align)}

  background-color: ${props => props._background_color};
  width: ${props => props._width};
  height: ${props => props._height};
`;

export const List = (props: IListProps) => (
  <StyledList
    _outer={props._outer}
    _inner={props._inner}
    _content_align={props._content_align}
    _width={props._width}
    _height={props._height}
    _background_color={props._background_color}
  >
    {props.children}
  </StyledList>
);
