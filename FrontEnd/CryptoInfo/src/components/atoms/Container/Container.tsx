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

interface IContainerProps extends IComponentProps {
  _outer?: IOuterType;
  _inner?: IInnerType;
  _content_align?: IContentAlignType;

  _width?: string;
  _height?: string;
  _borderBottom?: boolean;
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

  width: ${props => props._width} !important;
  height: ${props => props._height} !important;

  ${props =>
    props._borderBottom === true &&
    css`
      border-bottom: 1px solid ${THEME.basic.containerBorder} !important;
  `};
`;

export const Container = (props: IContainerProps) => (
  <StyledContainer
    _outer={props._outer}
    _inner={props._inner}
    _content_align={props._content_align}
    _width={props._width}
    _height={props._height}
    _borderBottom={props._borderBottom}
  >
    {props.children}
  </StyledContainer>
);
