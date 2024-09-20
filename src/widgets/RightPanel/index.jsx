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

import React, { useCallback, useEffect, useState } from "react";

import "react-datepicker/dist/react-datepicker.css";
import { Tag, AddNewTag } from "../../shared/components/Tag/index.jsx";

export const RightPanel = ({
  rightPanelVisibility,
  className,
  tasks,
  setTasks,
  taskId,
  editMode,
  setEditMode,
  toggleRightPanelVisibility,
  taskToEdit,
  taskName,
  setTaskName,
  taskDescription,
  setTaskDescription,
  taskDate,
  setTaskDate,
  tags,
  setTags,
  setTaskToEdit,
  currentTags,
  setCurrentTags,
  handleTagClick,
}) => {
  if (rightPanelVisibility === false) return null;

  function deleteTask() {
    if (editMode === false) {
      toggleRightPanelVisibility();
    }
    if (editMode === true) {
      tasks = tasks.filter((task) => task.id !== taskId);
      setTasks(tasks);
      setTaskToEdit(null);
      toggleRightPanelVisibility();
    }
  }

  function saveTask() {
    if (editMode === false) {
      // make a new task
      let task = {
        id: taskId,
        name: taskName,
        description: taskDescription,
        date: taskDate,
        isChecked: false,
        tags: currentTags,
      };
      setTasks([...tasks, task]);
      setCurrentTags([]);
      toggleRightPanelVisibility();
    }
    if (editMode === true) {
      taskToEdit.name = taskName;
      taskToEdit.description = taskDescription;
      taskToEdit.date = taskDate;
      toggleRightPanelVisibility();
      setEditMode(false);
    }
  }
  let colorArr = [];

  function pickRandomColor() {
    if (colorArr.length === 0) {
      colorArr = [
        "#FFEDFF",
        "#FAFFC0",
        "#FFFFFF",
        "#D3DDFF",
        "#AFDDC4",
        "#FFDBB0",
        "#E9D7FF",
        "#FFCDDF",
      ];
    }
    let pickedColor = colorArr[Math.floor(Math.random() * colorArr.length)];
    colorArr = colorArr.map((color) => color !== pickedColor);
    return pickedColor;
  }
  const [content, setContent] = useState("+ Add New Tag");

  function addNewTag(e) {
    if (content !== "+ Add New Tag") {
      let tag = {};
      tag.tagName = content;
      tag.tagColor = pickRandomColor();
      tag.id = content;
      let newTags = [...tags];
      newTags.push(tag);
      setTags(newTags);
      setContent("+ Add New Tag");
      e.target.value = "+ Add New Tag";
      setCurrentTags([...currentTags, tag]);
    }
  }

  useEffect(() => {
    if (taskToEdit) {
      setTaskName(taskToEdit.name);
      setTaskDescription(taskToEdit.description);
      setTaskDate(new Date());
    }
  }, [taskToEdit]);

  const mapTags = useCallback(
    (tags) =>
      tags.map((tag) => (
        <Tag
          key={tag.id}
          tagName={tag.tagName}
          tagColor={tag.tagColor}
          handleTagClick={handleTagClick}
        ></Tag>
      )),

    [],
  );

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
          <DatePickerStyled
            taskDate={taskDate}
            setTaskDate={setTaskDate}
          ></DatePickerStyled>
        </DatePickerWrapper>
        <TagsPanel>
          <Text>Tags:</Text>
          {!editMode ? (
            <AddNewTag
              tagName="+ Add New Tag"
              tagColor="#FAFFC0"
              addNewTag={addNewTag}
              content={content}
              setContent={setContent}
            />
          ) : null}
          {taskToEdit ? mapTags(taskToEdit.tags) : mapTags(currentTags)}
        </TagsPanel>
      </Wrapper>
      <ButtonWrapper>
        <Button onClick={deleteTask}>Delete Task</Button>
        <Button onClick={saveTask}>Save Changes</Button>
      </ButtonWrapper>
    </Background>
  );
};
