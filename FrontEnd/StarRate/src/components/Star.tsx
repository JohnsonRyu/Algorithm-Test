import React from "react";
import styled, { css } from "styled-components";

import { ReactComponent as StarEmpty } from "../images/ic-star-empty.svg";
import { ReactComponent as StarFull } from "../images/ic-star-full.svg";
import { ReactComponent as StarHalf } from "../images/ic-star-half.svg";

import { StarState } from "../constants/types";

interface ISVGProps {
  className?: string;

  _width?: string;
  _height?: string;
  _cursor?: string;
  _onTouchStart?: (event, num) => void;
  _onTouchMove?: (event, num) => void;
  _onTouchEnd?: () => void;
  _onPointerMove?: (event, num) => void;
  _onClick?: () => void;
  _onMouseLeave?: () => void;
  starNumber?: number;
  isMobile?: boolean;
}

interface IStarProps extends ISVGProps {
  default?: boolean;
  state?: StarState;
}

const StarSVGType = (state: StarState) => {
  if (state === StarState.empty) {
    return <StarEmpty />;
  } else if (state === StarState.half) {
    return <StarHalf />;
  } else {
    return <StarFull />;
  }
};

const CustomStyledSVG = ({ className, ...props }: IStarProps) => {
  return props.isMobile ? (
    <div
      className={className}
      onTouchStart={event => props._onTouchStart(event, props.starNumber)}
      onTouchMove={event => props._onTouchMove(event, props.starNumber)}
      onTouchEnd={event => props._onTouchEnd(event, props.starNumber)}
    >
      {StarSVGType(props.state)}
    </div>
  ) : (
    <div
      className={className}
      onPointerMove={event => props._onPointerMove(event, props.starNumber)}
      onClick={props._onClick}
      onMouseLeave={props._onMouseLeave}
    >
      {StarSVGType(props.state)}
    </div>
  );
};

const StyledSVG = styled(CustomStyledSVG)`
  ${props =>
    props.default === true &&
    css`
      width: 32px;
      height: 31px;
      padding: 0 2px;
      cursor: pointer;
    `};

  width: ${props => props._width};
  height: ${props => props._height};
  cursor: ${props => props._cursor};
`;

export const Star = (props: IStarProps) => {
  return (
    <StyledSVG
      _width={props._width}
      _height={props._height}
      _cursor={props._cursor}
      _onTouchStart={props._onTouchStart}
      _onTouchMove={props._onTouchMove}
      _onTouchEnd={props._onTouchEnd}
      _onPointerMove={props._onPointerMove}
      _onClick={props._onClick}
      _onMouseLeave={props._onMouseLeave}
      state={props.state}
      default={props.default}
      starNumber={props.starNumber}
      isMobile={props.isMobile}
    />
  );
};
