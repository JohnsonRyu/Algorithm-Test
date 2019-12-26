import React from "react";

import { Menu, MenuProps } from "semantic-ui-react";
import styled from "styled-components";

import { IComponentProps } from "../../../constants/types";

interface IMenuProps extends IComponentProps {
  _background_color?: string;
  _width?: string;
}

const SemanticStyledMenu = ({ className, ...props }: IMenuProps) => (
  <Menu
    className={className}
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
    _background_color={props._background_color}
    _width={props._width}
  >
    {props.children}
  </StyledMenu>
);
