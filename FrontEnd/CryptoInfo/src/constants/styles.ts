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

export type IContentAlignType =
  | "center"
  | "justify-center"
  | "align-center"
  | "align-end"
  | "justify-end"
  | "justify-space-between"
  | "space-between-center"
  | "justify-end-center"
  | "base-line";

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
      padding: 4px !important;
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

export function contentAlignStyling(_content_align: IContentAlignType) {
  if (_content_align === "center") {
    return css`
      display: flex !important;
      justify-content: center !important;
      align-items: center !important;
    `;
  } else if (_content_align === "justify-center") {
    return css`
      display: flex !important;
      justify-content: center !important;
    `;
  } else if (_content_align === "align-center") {
    return css`
      display: flex !important;
      align-items: center !important;
    `;
  } else if (_content_align === "align-end") {
    return css`
      display: flex !important;
      align-items: flex-end !important;
    `;
  } else if (_content_align === "justify-end") {
    return css`
      display: flex !important;
      justify-content: flex-end !important;
    `;
  } else if (_content_align === "justify-space-between") {
    return css`
      display: flex !important;
      justify-content: space-between !important;
    `;
  } else if (_content_align === "space-between-center") {
    return css`
      display: flex !important;
      justify-content: space-between !important;
      align-items: center !important;
    `;
  } else if (_content_align === "justify-end-center") {
    return css`
      display: flex !important;
      justify-content: flex-end !important;
      align-items: center !important;
    `;
  } else if (_content_align === "base-line") {
    return css`
      display: flex !important;
    `;
  }
}