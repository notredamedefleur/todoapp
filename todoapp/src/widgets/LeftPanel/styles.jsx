import styled from "@emotion/styled";
import { Button } from "../../shared/components/Button/index.jsx";
import { FONTS } from "../../shared/components/ui-kit/consts/fonts/FONTS.jsx";

export const Background = styled.div`
  position: relative;
  border-radius: 30px;
  background-color: #d2ff98bf;
  box-shadow: 0px 4px 4px 0px #00000040;
  width: 350px;
  height: calc(100vh - 30px);
  margin: 15px;
`;

export const UserPanel = styled.div`
  display: flex;
  align-items: center;
  margin: 30px;
  ${FONTS.header4}
`;

export const TasksTab = styled.div``;

export const TagsTab = styled.div``;

export const TagsBody = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
`;

export const TagsHeader = styled.div`
  ${FONTS.header2}
  margin-left: 15px;
`;

export const TasksHeader = styled.div`
  ${FONTS.header2}
  margin: 30px 20px 0px 15px;
`;

export const TasksBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 10px 20px 20px 10px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 81%;
`;

export const ResetButton = styled(Button)`
  width: 70%;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  bottom: 20px;
`;
