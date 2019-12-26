import { css } from "styled-components";

export type IOuterType =
  | "compact"
  | "tiny"
  | "small"
  | "middle"
  | "large"
  | "big"
  | "column-tiny"
  | "column-small"
  | "column-middle";

  export type IInnerType =
  | "compact"
  | "tiny"
  | "small"
  | "middle"
  | "large"
  | "big"
  | "column-tiny"
  | "column-small"
  | "column-middle";

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
  } else if (_outer === "column-tiny") {
    return css`
      margin: 0 2px !important;
    `;
  } else if (_outer === "column-small") {
    return css`
      margin: 0 10px !important;
    `;
  } else if (_outer === "column-middle") {
    return css`
      margin: 0 20px !important;
    `;
  }
}

export function innerStyling(_inner: IInnerType) {
  if (_inner === "compact") {
    return css`
      padding: 0px !important;
    `;
  } else if (_inner === "tiny") {
    return css`
      padding: 2px !important;
    `;
  } else if (_inner === "small") {
    return css`
      padding: 10px !important;
    `;
  } else if (_inner === "middle") {
    return css`
      padding: 20px !important;
    `;
  } else if (_inner === "large") {
    return css`
      padding: 40px !important;
    `;
  } else if (_inner === "big") {
    return css`
      padding: 80px !important;
    `;
  } else if (_inner === "column-tiny") {
    return css`
      padding: 0 2px !important;
    `;
  } else if (_inner === "column-small") {
    return css`
      padding: 0 10px !important;
    `;
  } else if (_inner === "column-middle") {
    return css`
      padding: 0 20px !important;
    `;
  }
}