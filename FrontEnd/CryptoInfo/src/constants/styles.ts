import { css } from "styled-components";

export type IOuterType =
  | "compact"
  | "tiny"
  | "small"
  | "middle"
  | "large"
  | "big";

export function outerStyling(_outer: IOuterType) {
  if (_outer === "compact") {
    return css`
      margin: 0px !important;
    `;
  } else if (_outer === "tiny") {
    return css`
      margin: 2px !important;
    `;
  } else if (_outer === "small") {
    return css`
      margin: 10px !important;
    `;
  } else if (_outer === "middle") {
    return css`
      margin: 20px !important;
    `;
  } else if (_outer === "large") {
    return css`
      margin: 40px !important;
    `;
  } else if (_outer === "big") {
    return css`
      margin: 80px !important;
    `;
  }
}