import React from "react";

import { Menu, MenuItemProps } from "semantic-ui-react";
import styled, {css} from "styled-components";

import { IComponentProps } from "../../../constants/types";
import { THEME } from "../../../constants/colors";

interface IMenuItemProps extends IComponentProps {
  name?: MenuItemProps["name"];
  onClick?: MenuItemProps["onClick"];

  _active?: boolean;
  _cursor?: string;
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

  ${props =>
    props._active === true &&
    css`
      border-bottom: 2px solid ${THEME.basic.tabBorder} !important;
      color: ${THEME.basic.tabBorder} !important;
    `};
`;

export const MenuItem = (props: IMenuItemProps) => (
  <StyledMenuItem
    name={props.name}
    _active={props._active}
    _cursor={props._cursor}
    onClick={props.onClick}
  >
    {props.children}
  </StyledMenuItem>
);
