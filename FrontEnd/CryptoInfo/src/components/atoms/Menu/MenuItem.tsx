import React from "react";

import { Menu, MenuItemProps } from "semantic-ui-react";
import styled, {css} from "styled-components";

import { IComponentProps } from "../../../constants/types";
import { THEME } from "../../../constants/colors";

interface IMenuItemProps extends IComponentProps {
  name?: MenuItemProps["name"];
  onClick?: MenuItemProps["onClick"];

  _active?: boolean;
  _inactive?: boolean;
  _cursor?: string;
  _background_color?: string;
}

const SemanticStyledMenuItem = ({ className, ...props }: IMenuItemProps) => (
  <Menu.Item
    className={className}
    name={props.name}
    onClick={props.onClick}
  >
    {props.children}
  </Menu.Item>
);

const StyledMenuItem = styled(SemanticStyledMenuItem)`
  cursor: ${props => props._cursor};
  background-color: ${props => props._background_color} !important;

  ${props =>
    props._active === true &&
    css`
      border-bottom: 2px solid ${THEME.basic.tabBorder} !important;
  `};
  ${props =>
    props._inactive === true &&
    css`
      border-bottom: 2px solid ${THEME.basic.tabBasicBorder} !important;
  `};
`;

export const MenuItem = (props: IMenuItemProps) => (
  <StyledMenuItem
    name={props.name}
    onClick={props.onClick}
    _active={props._active}
    _inactive={props._inactive}
    _cursor={props._cursor}
    _background_color={props._background_color}
  >
    {props.children}
  </StyledMenuItem>
);
