import React from "react";

import styled from "styled-components";

import { IComponentProps } from "../../../constants/types";

interface ITextProps extends IComponentProps {
}

const CustomStyledText = ({ className, ...props }: ITextProps) => (
  <span
    className={className}
  >
    {props.children}
  </span>
);

const StyledText = styled(CustomStyledText)`
`;

export const Text = (props: ITextProps) => (
  <StyledText>
    {props.children}
  </StyledText>
);
