import React from "react";
import { SyncLoader } from "react-spinners";

import { Container } from "../atoms/Container";
import { THEME } from "../../constants/colors";

export const Loading = () => (
  <Container _width="100%" _height={window.innerHeight.toFixed()+"px"} _content_align ="center">
    <SyncLoader size={20} color={THEME.basic.loading}/>
  </Container>
)