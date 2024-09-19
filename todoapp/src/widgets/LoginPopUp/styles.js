import styled from "@emotion/styled";
import * as FONTS from "../../shared/components/ui-kit/consts/fonts/FONTS.jsx";

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
  margin-top: 10px;
  margin-bottom: 30px;
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
