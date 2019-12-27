import React from "react";

import styled from "styled-components";

import { IComponentProps } from "../../../constants/types";

interface ITextProps extends IComponentProps {
  _color?: string;
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
`;

export const Text = (props: ITextProps) => (
  <StyledText _color={props._color}>
    {props.children}
  </StyledText>
);
