import React from "react";

import { Search, SearchProps } from "semantic-ui-react";
import styled from "styled-components";

import { IComponentProps } from "../../../constants/types";

interface ISearchProps extends IComponentProps {
  fluid?: SearchProps["fluid"];
  input?: SearchProps["input"];
  placeholder?: SearchProps["placeholder"];
  open?: SearchProps["open"];

  _square?: boolean;
}

const SemanticStyledSearch = ({ className, ...props }: ISearchProps) => (
  <Search
    className={className}
    fluid={props.fluid}
    input={props.input}
    placeholder={props.placeholder}
    open={props.open}
  >
    {props.children}
  </Search>
);

const StyledSearch = styled(SemanticStyledSearch)`
  border-radius: 0 !important;
`;

export const SemanticSearch = (props: ISearchProps) => (
  <StyledSearch
    fluid={props.fluid}
    input={props.input}
    placeholder={props.placeholder}
    open={props.open}
    _square={props._square}
  >
    {props.children}
  </StyledSearch>
);