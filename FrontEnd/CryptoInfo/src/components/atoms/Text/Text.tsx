import React from "react";

import styled, { css } from "styled-components";

import { IComponentProps } from "../../../constants/types";
import { THEME } from "../../../constants/colors";

interface ITextProps extends IComponentProps {
  _color?: string;
  _bold?: boolean;
  _badge?: boolean;
  _width?: string;
  _height?: string;
}

const CustomStyledText = ({ className, ...props }: ITextProps) => (
  <span
    className={className}
  >
    {props.children}
  </span>
);

const StyledText = styled(CustomStyledText)`
  color: ${props => props._color};
  width: ${props => props._width};
  height: ${props => props._height};

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
      color: ${THEME.basic.menuBadgeTextGrey};;
  `};
`;

export const Text = (props: ITextProps) => (
  <StyledText 
    _color={props._color}
    _bold={props._bold}
    _badge={props._badge}
    _width={props._width}
    _height={props._height}
    >
    {props.children}
  </StyledText>
);
