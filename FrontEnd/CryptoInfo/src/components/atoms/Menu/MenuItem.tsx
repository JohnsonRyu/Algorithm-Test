import React from "react";

import { Menu, MenuItemProps } from "semantic-ui-react";
import styled from "styled-components";

import { IComponentProps } from "../../../constants/types";

interface IMenuItemProps extends IComponentProps {
  name?: MenuItemProps["name"];

  _cursor?: string;
}

const SemanticStyledMenuItem = ({ className, ...props }: IMenuItemProps) => (
  <Menu.Item
    className={className}
    name={props.name}
  >
    {props.children}
  </Menu.Item>
);

const StyledMenuItem = styled(SemanticStyledMenuItem)`
  cursor: ${props => props._cursor};
`;

export const MenuItem = (props: IMenuItemProps) => (
  <StyledMenuItem
    name={props.name}
    _cursor={props._cursor}
  >
    {props.children}
  </StyledMenuItem>
);
