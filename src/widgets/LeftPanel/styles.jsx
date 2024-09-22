import styled from "@emotion/styled";
import { Button } from "shared/components";
import { FONTS } from "shared/consts";

export const Background = styled.div`
  position: relative;
  border-radius: 30px;
  background-color: #d2ff98bf;
  box-shadow: 0 4px 4px 0 #00000040;
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
  margin-left: 10px;
  margin-right: 10px;
`;

export const TagsHeader = styled.div`
  ${FONTS.header2}
  margin-left: 15px;
  margin-bottom: 15px;
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

export const InfoText = styled.div`
  position: absolute;
  bottom: 90px;
  opacity: 0.5;
  margin-left: 15px;
  z-index: -1;
  width: 300px;
  text-align: center;
`;
