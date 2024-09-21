import styled from "@emotion/styled";
import { FONTS } from "shared/consts";

export const Background = styled.div`
  background-color: #f1ffdf;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 760px;
  height: 425px;
`;
export const NameInput = styled.input`
  border-radius: 30px;
  border: none;
  height: 40px;
  width: 500px;
  padding-left: 10px;
  margin: 10px 0 30px 0;
  font-family: "Poppins", sans-serif;
  ${FONTS.body1}
`;
export const AvatarGallery = styled.div`
  margin-bottom: 30px;
`;

export const Welcome = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
  font-family: "Poppins", sans-serif;
  ${FONTS.header8}
`;

export const NameEnter = styled.div`
  font-family: "Poppins", sans-serif;
  ${FONTS.body1}
`;

export const Wrapper = styled.div`
  margin-left: 10px;
`;
