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
    tasks, setTasks,
    taskId, setTaskId,
}) => {
  if (rightPanelVisibility === false) return null;

  const [taskName, setTaskName] = useState("New Task");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState(new Date());






  function saveTask() {
    let task = {};
    task.id = taskId;
    setTaskId(taskId + 1);
    task.name = taskName;
    task.description = taskDescription;
    task.date = taskDate;
    task.isChecked = false;

    let newTasks = tasks;
    newTasks.push(task);
    setTasks(newTasks);
    handleClick();
  }



  return (
    <Background>
      <Wrapper>
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
          <DatePickerStyled taskDate={taskDate} setTaskDate={setTaskDate}></DatePickerStyled>
        </DatePickerWrapper>
        <TagsPanel>
          Tags:
          <Tag>home</Tag>
          <Tag>school</Tag>
          <Tag>random</Tag>
        </TagsPanel>
      </Wrapper>
      <ButtonWrapper>
        <Button>Delete Task</Button>
        <Button onClick={saveTask}>Save Changes</Button>
      </ButtonWrapper>
    </Background>
  );
};
