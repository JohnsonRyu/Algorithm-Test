import React from "react";

import { Container } from "../atoms/Container";
import { Text } from "../atoms/Text";

interface ITextWithUnitProps {
  first?: string;
  second?: string;
  space?: boolean;
}

export const TextWithUnit = (props: ITextWithUnitProps) => (
  <Container>
    <Text>{props.first}</Text>
    {props.space === true ? <span>&nbsp;</span> : <></>}
    <Text>{props.second}</Text>
  </Container>
)