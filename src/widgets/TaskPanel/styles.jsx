import styled from "@emotion/styled";
import { Button } from "shared/components";
import { FONTS } from "shared/consts";

export const Header = styled.h1`
  ${FONTS.header5}
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
  ${FONTS.body2}
`;
export const ListHeader = styled.div`
  ${FONTS.header6}
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
