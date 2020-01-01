import React from "react";
import styled from "styled-components";

import { IComponentProps } from "../../../constants/types";
import {
  IOuterType,
  IContentAlignType,
  outerStyling,
  contentAlignStyling
} from "../../../constants/styles";

interface IDefinitionDataProps extends IComponentProps {
  _outer?: IOuterType;
  _content_align?: IContentAlignType;

  _margin_bottom?: string;
}

const CustomStyledIDefinitionData = ({ className, ...props }: IDefinitionDataProps) => (
  <dd
    className={className}
  >
    {props.children}
  </dd>
);

const StyledDefinitionData = styled(CustomStyledIDefinitionData)`
  ${props => props._outer && outerStyling(props._outer)}
  ${props => props._content_align && contentAlignStyling(props._content_align)}

  margin-bottom: ${props => props._margin_bottom} !important;
`;

export const DefinitionData = (props: IDefinitionDataProps) => (
  <StyledDefinitionData
    _outer={props._outer}
    _content_align={props._content_align}
    _margin_bottom={props._margin_bottom}
  >
    {props.children}
  </StyledDefinitionData>
);
