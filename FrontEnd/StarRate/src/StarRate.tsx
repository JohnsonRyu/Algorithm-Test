import React, { Component, Fragment } from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";
import styled from "styled-components";

import { Star } from "./components/Star";
import { Container } from "./components/Container";
import { StarState } from "./constants/types";

import ResetButton from "./images/ic-reset.png";

const Image = styled.img`
  width: 16px;
  height: 16px;
  margin: 0 5px;
  cursor: pointer;
`;

interface IStarRateProps {
  value: number;
  handleChange: (num: number) => void;
}

@observer
export class StarRate extends Component<IStarRateProps> {
  @observable starPoint: number = 0;
  isFix: boolean = false;

  // 모바일 터치 (스와이프)
  private onMobileTouch = (event, starNumber: number) => {
    if (this.isFix === false) {
      const touchX = event.touches[0].pageX;
      const targetX = event.target.getBoundingClientRect().left;
      const startWidth = event.currentTarget.offsetWidth;
      const mousePositionX = touchX - targetX + starNumber * startWidth;
      let currentPoint = 0;

      if (mousePositionX > 0) {
        currentPoint = Math.round(mousePositionX / (startWidth / 2)) * 0.5;
      }
      this.starPoint = currentPoint;
    }
  };

  private onTouchEnd = () => {
    this.props.handleChange(this.starPoint);
    this.isFix = true;
  };

  // 데스크탑 터치
  private onPointerMove = (event, starNumber: number) => {
    if (this.isFix === false) {
      const mousePositionX = event.nativeEvent.offsetX;
      const startWidth = event.currentTarget.offsetWidth;
      let currentPoint = starNumber;

      if (mousePositionX < startWidth / 2) {
        currentPoint += 0.5;
      } else {
        currentPoint += 1;
      }

      this.starPoint = currentPoint;
    }
  };

  private onClick = () => {
    this.props.handleChange(this.starPoint);
    this.isFix = true;
  };

  private onMouseLeave = () => {
    if (this.isFix === false) {
      this.starPoint = 0;
    }
  };

  private drawStarDesktop(value: number) {
    return this.calculatorStartCount(value).map(
      (state: StarState, i: number) => (
        <Star
          key={i}
          starNumber={i}
          default
          state={state}
          _onPointerMove={this.onPointerMove}
          _onClick={this.onClick}
          _onMouseLeave={this.onMouseLeave}
        />
      )
    );
  }

  private drawStarMobile(value: number) {
    return this.calculatorStartCount(value).map(
      (state: StarState, i: number) => (
        <Star
          key={i}
          starNumber={i}
          default
          state={state}
          isMobile
          _onTouchStart={this.onMobileTouch}
          _onTouchMove={this.onMobileTouch}
          _onTouchEnd={this.onTouchEnd}
        />
      )
    );
  }

  private calculatorStartCount(point: number) {
    let starArr = [];

    const full = Math.floor(point);
    let half: boolean = point - full === 0.5;

    for (let i = 1; i <= 5; i++) {
      if (i <= full) {
        starArr.push(StarState.full);
      } else {
        if (half) {
          starArr.push(StarState.half);
          half = false;
        } else {
          starArr.push(StarState.empty);
        }
      }
    }

    return starArr;
  }

  private resetButtonClick = () => {
    this.isFix = false;
    this.starPoint = 0;
    this.props.handleChange(0);
  };

  render() {
    const isMobile: boolean = window.innerWidth <= 500;

    return (
      <Container _width="262px" _height="85px" center>
        <Fragment>
          {isMobile
            ? this.drawStarMobile(this.starPoint)
            : this.drawStarDesktop(this.starPoint)}
          <Image src={ResetButton} onClick={this.resetButtonClick} />
        </Fragment>
      </Container>
    );
  }
}
