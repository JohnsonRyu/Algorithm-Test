import React from "react";
import styled from "styled-components";

import { IComponentProps } from "../../../constants/types";
import {
  IOuterType,
  IInnerType,
  IContentAlignType,
  outerStyling,
  innerStyling,
  contentAlignStyling
} from "../../../constants/styles";

interface IDefinitionProps extends IComponentProps {
  _outer?: IOuterType;
  _inner?: IInnerType;
  _content_align?: IContentAlignType;
  
  _width?: string;
  _font_size?: string;
  _line_height?: string;
  _margin_bottom?: string
}

const CustomStyledIDefinition = ({ className, ...props }: IDefinitionProps) => (
  <dl
    className={className}
  >
    {props.children}
  </dl>
);

const StyledDefinition = styled(CustomStyledIDefinition)`
  ${props => props._outer && outerStyling(props._outer)}
  ${props => props._inner && innerStyling(props._inner)}
  ${props => props._content_align && contentAlignStyling(props._content_align)}

  width: ${props => props._width};
  font-size: ${props => props._font_size};
  line-height: ${props => props._line_height};
  margin-bottom: ${props => props._margin_bottom};
`;

export const Definition = (props: IDefinitionProps) => (
  <StyledDefinition
    _outer={props._outer}
    _inner={props._inner}
    _content_align={props._content_align}
    _width={props._width}
    _font_size={props._font_size}
    _line_height={props._line_height}
    _margin_bottom={props._margin_bottom}
  >
    {props.children}
  </StyledDefinition>
);
