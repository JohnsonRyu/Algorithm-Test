import React from "react";
import styled from "styled-components";

import { IComponentProps } from "../../../constants/types";
import {
  IOuterType,
  IInnerType,
  outerStyling,
  innerStyling,
} from "../../../constants/styles";

interface IDefinitionProps extends IComponentProps {
  _outer?: IOuterType;
  _inner?: IInnerType;
  
  _width?: string;
  _font_size?: string;
  _line_height?: string;
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

  width: ${props => props._width};
  font-size: ${props => props._font_size};
  line-height: ${props => props._line_height};
`;

export const Definition = (props: IDefinitionProps) => (
  <StyledDefinition
    _outer={props._outer}
    _inner={props._inner}
    _width={props._width}
    _font_size={props._font_size}
    _line_height={props._line_height}
  >
    {props.children}
  </StyledDefinition>
);
