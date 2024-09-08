import styled from "@emotion/styled";
import {Button} from "../../shared/components/Button/index.jsx";


export const Background = styled.div`
  border-radius: 30px;
  background-color: #d2ff98bf;
  box-shadow: 0px 4px 4px 0px #00000040;
  width: auto;
  height: calc(100vh - 30px);
  margin: 15px;
`;

export const UserPanel = styled.div`
  display: flex;
  align-items: center;
  margin: 30px;
  font-size: 24px;
  font-weight: 600;
`;

export const TasksTab = styled.div``;

export const TagsTab = styled.div``;

export const TagsBody = styled.div`
  margin-left: 25px;
  margin-right: 25px;
`;

export const TagsHeader = styled.div`
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  margin-left: 30px;
  margin-bottom: 20px;
  margin-right: 30px;
`;

export const TasksHeader = styled.div`
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  margin: 30px 20px 0px 30px;
`;

export const TasksBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 10px 20px 20px 25px;
    
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
    height: 81%;
    align-items: center;

`;


export const ResetButton = styled(Button)`
 width: 70%;
    
    
    
`

