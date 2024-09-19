import styled from "@emotion/styled";
import { FONTS } from "../ui-kit/consts/fonts/FONTS.jsx";

export const DefaultButton = styled.button`
  font-family: Poppins, sans-serif;
  ${FONTS.button1}
`;

export const BorderedButton = styled.button`
  font-family: Poppins, sans-serif;
  ${FONTS.header7}
  border: 2px solid black;
  background-color: #f1ffdf;
  border-radius: 30px;
`;
