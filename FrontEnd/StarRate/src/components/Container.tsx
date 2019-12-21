import React from "react";
import styled, { css } from "styled-components";

import { IComponentProps } from "../constants/interface";

interface IContainerProps extends IComponentProps {
  _width?: string;
  _height?: string;
  center?: boolean;
}

const CustomContainer = ({ className, ...props }: IContainerProps) => (
  <div className={className}>{props.children}</div>
);

const StyledContainer = styled(CustomContainer)`
  width: ${props => props._width};
  height: ${props => props._height};

  ${props =>
    props.center === true &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
    `};
`;

export const Container = (props: IContainerProps) => (
  <StyledContainer
    _width={props._width}
    _height={props._height}
    center={props.center}
  >
    {props.children}
  </StyledContainer>
);
