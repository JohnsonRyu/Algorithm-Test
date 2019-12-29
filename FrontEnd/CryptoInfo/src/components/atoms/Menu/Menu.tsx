import React from "react";

import { Menu, MenuProps } from "semantic-ui-react";
import styled from "styled-components";

import { IComponentProps } from "../../../constants/types";
import {
  IOuterType,
  outerStyling
} from "../../../constants/styles";

interface IMenuProps extends IComponentProps {
  pointing?: MenuProps["pointing"];
  secondary?: MenuProps["secondary"];
  widths?: MenuProps["widths"];
  fixed?: MenuProps["fixed"];

  _outer?: IOuterType;

  _background_color?: string;
  _width?: string;
}

const SemanticStyledMenu = ({ className, ...props }: IMenuProps) => (
  <Menu
    className={className}
    pointing={props.pointing}
    secondary={props.secondary}
    widths={props.widths}
    fixed={props.fixed}
  >
    {props.children}
  </Menu>
);

const StyledMenu = styled(SemanticStyledMenu)`
  ${props => props._outer && outerStyling(props._outer)}

  background-color: ${props => props._background_color};
  width: ${props => props._width};
`;

export const SemanticMenu = (props: IMenuProps) => (
  <StyledMenu
    pointing={props.pointing}
    secondary={props.secondary}
    widths={props.widths}
    fixed={props.fixed}
    _outer={props._outer}
    _background_color={props._background_color}
    _width={props._width}
  >
    {props.children}
  </StyledMenu>
);
