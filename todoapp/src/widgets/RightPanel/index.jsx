import {
  Background,
  Header,
  InputField,
  Text,
  DatePickerWrapper,
  TagsPanel,
  Wrapper,
  Button,
  ButtonWrapper,
  DatePickerStyled,
} from "./styles.jsx";
import { Tag } from "../../shared/components/Tag/index.jsx";

import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";





export const RightPanel = ({
  rightPanelVisibility,
  handleClick,
  className,
}) => {
  if (rightPanelVisibility === false) return null;

  const [taskName, setTaskName] = useState("New Task");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskId, setTaskId] = useState(0);



  // const [task, setTask] = useState({});

  // function handleChange(e) {
  //   let updatedValue = {};
  //   updatedValue[e.target.name] = e.target.value;
  //   setTask(task => ({
  //     ...task,
  //     ...updatedValue,
  //   }));
  // }

  function saveTask() {
    let task = {};
    task.id = taskId;
    setTaskId(taskId + 1);
    task.name = taskName;
    task.description = taskDescription;

  }



  return (
    <Background>
      <Wrapper>
        {/*<label>*/}
        <Header
          className={className}
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        ></Header>
        <Text>Task description:</Text>
        <InputField
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        />
        <DatePickerWrapper>
          <Text>Due Date:</Text>
          <DatePickerStyled className={className} value={taskDate} onSubmit={(e) => setTaskDate(e.target.value)} ></DatePickerStyled>
        </DatePickerWrapper>
        <TagsPanel>
          Tags:
          <Tag>home</Tag>
          <Tag>school</Tag>
          <Tag>random</Tag>
        </TagsPanel>
      </Wrapper>
      <ButtonWrapper>
        <Button onClick={""}>Delete Task</Button>
        <Button onClick={saveTask}>Save Changes</Button>
      </ButtonWrapper>
    </Background>
  );
};
