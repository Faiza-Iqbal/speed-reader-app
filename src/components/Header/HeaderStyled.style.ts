// lib
import styled from "@emotion/styled";

import { main, primary_dark } from "../../styles/colorVariables";

export const HeaderStyled = styled.header({
  padding: "30px 0px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: main,
  border: "2px solid primary",
  "& h1": {
    color: primary_dark,
  },
});
