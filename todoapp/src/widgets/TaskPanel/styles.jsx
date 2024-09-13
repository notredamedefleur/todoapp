import styled from "@emotion/styled";
import { Button } from "../../shared/components/Button/index.jsx";
import {
  body2,
  header5,
  header6,
} from "../../shared/components/ui-kit/consts/fonts/FONTS.jsx";


export const Header = styled.h1`
  ${header5}
`;

export const Wrapper = styled.div`
  margin: 30px;
  width: 600px;
`;



export const UpcomingTab = styled.div``;
export const FinishedTab = styled.div``;

export const AddNewTask = styled(Button)`
  margin-left: 30px;
  background-color: #ddffb2;
  border-radius: 30px;

  padding-left: 20px;
  padding-right: 20px;
  ${body2}
`;
export const ListHeader = styled.div`
  ${header6}
`;

export const TabsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(60vh);
`;

export const HeaderWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
  margin-top: 30px;
`;
