import React from "react";
import { Button, ButtonProps } from "semantic-ui-react";
import styled from "styled-components";

import { IComponentProps } from "../../../constants/types";

interface IButtonProps extends IComponentProps {
  onClick?: ButtonProps["onClick"];
  content?: ButtonProps["content"];

  _background_color?: string;
  _width?: string;
  _height?: string;
}

const SemanticStyledButton = ({ className, ...props }: IButtonProps) => (
  <Button
    className={className}
    onClick={props.onClick}
    content={props.content}
  >
    {props.children}
  </Button>
);

const StyledButton = styled(SemanticStyledButton)`
  background-color: ${props => props._background_color};
  width: ${props => props._width};
  height: ${props => props._height};

  word-break: keep-all;
`;

export const SemanticButton = (props: IButtonProps) => {
  return (
    <StyledButton
      onClick={props.onClick}
      content={props.content}
      _background_color={props._background_color}
      _width={props._width}
      _height={props._height}
    >
      {props.children}
    </StyledButton>
  );
};