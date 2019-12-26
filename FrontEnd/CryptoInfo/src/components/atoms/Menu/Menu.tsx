import React from "react";

import { Menu, MenuProps } from "semantic-ui-react";
import styled from "styled-components";

import { IComponentProps } from "../../../constants/types";

interface IMenuProps extends IComponentProps {
  pointing?: MenuProps["pointing"];
  secondary?: MenuProps["secondary"];
  widths?: MenuProps["widths"];

  _background_color?: string;
  _width?: string;
}

const SemanticStyledMenu = ({ className, ...props }: IMenuProps) => (
  <Menu
    className={className}
    pointing={props.pointing}
    secondary={props.secondary}
    widths={props.widths}
  >
    {props.children}
  </Menu>
);

const StyledMenu = styled(SemanticStyledMenu)`
  background-color: ${props => props._background_color};
  width: ${props => props._width};
`;

export const SemanticMenu = (props: IMenuProps) => (
  <StyledMenu
    pointing={props.pointing}
    secondary={props.secondary}
    widths={props.widths}
    _background_color={props._background_color}
    _width={props._width}
  >
    {props.children}
  </StyledMenu>
);
