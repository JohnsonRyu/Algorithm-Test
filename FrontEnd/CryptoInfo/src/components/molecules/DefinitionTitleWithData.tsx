import React from "react";

import { Definition, DefinitionTitle, DefinitionData } from "../atoms/Definition";

interface IDefinitionTitleWithDataProps {
  title: string;
  data: string;
}

export const DefinitionTitleWithData = (props: IDefinitionTitleWithDataProps) => (
  <Definition 
    _content_align="space-between-center"
    _outer="compact"
    _margin_bottom="4px"
    _line_height="16px"
  >
    <DefinitionTitle>{props.title}</DefinitionTitle>
    <DefinitionData _outer="compact">{props.data}</DefinitionData>
  </Definition>
)