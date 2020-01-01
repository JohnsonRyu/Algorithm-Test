import React from "react";
import styled from "styled-components";

import { IComponentProps } from "../../../constants/types";

interface IDefinitionTitleProps extends IComponentProps {
  _font_weight?: string;
  _margin_bottom?: string;
}

const CustomStyledIDefinitionTitle = ({ className, ...props }: IDefinitionTitleProps) => (
  <dt
    className={className}
  >
    {props.children}
  </dt>
);

const StyledDefinitionTitle = styled(CustomStyledIDefinitionTitle)`
  font-weight: ${props => props._font_weight};
  margin-bottom: ${props => props._margin_bottom} !important;
`;

export const DefinitionTitle = (props: IDefinitionTitleProps) => (
  <StyledDefinitionTitle
    _font_weight={props._font_weight}
    _margin_bottom={props._margin_bottom}
  >
    {props.children}
  </StyledDefinitionTitle>
);
