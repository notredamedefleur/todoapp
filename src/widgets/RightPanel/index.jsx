import {
  Background,
  Header,
  InputField,
  Text,
  DatePickerWrapper,
  TagsPanel,
  Wrapper,
  ButtonStyled,
  ButtonWrapper,
  DatePickerStyled,
} from "./styles.jsx";

import React, { useCallback, useEffect, useState } from "react";

import "react-datepicker/dist/react-datepicker.css";
import { Tag, AddNewTag } from "../../shared/components/Tag/index.jsx";
import { pickRandomColor } from "./utils.js";

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
  function deleteTask() {
    if (editMode === false) {
      toggleRightPanelVisibility();
    }
    if (editMode === true) {
      tasks = tasks.filter((task) => task.id !== taskId);
      setTasks(tasks);
      setTaskToEdit(null);
      setCurrentTags(null);
      setEditMode(false);
      toggleRightPanelVisibility();
    }
  }



  function saveTask() {
    if (editMode === false) {
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

  const [content, setContent] = useState("+ Add New Tag");

  let tagsMappedToName = useCallback(tags.map((tag) => tag.tagName), [tags]);


  function addNewTag(e) {
    if (e.target.value === '') {
      e.target.value = '+ Add New Tag';
    }
    if (content !== "+ Add New Tag") {
      let tag = {};
      tag.tagName = content;
      tag.tagColor = pickRandomColor();
      tag.id = content;
      if (tagsMappedToName.includes(tag.tagName)) {
        setContent('+ Add New Tag');
        e.target.value = '+ Add New Tag'
        return;
      }
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

  if (rightPanelVisibility === false) {
    return null;
  }

  return (
    <Background>
      <Wrapper>
        <Header
          className={className}
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          onClick={(e) => {(e.target.value === 'New Task') ? e.target.value = '' : null}}
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
          <Text style={{marginLeft: '0px'}}>Tags:</Text>
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
        <ButtonStyled variant="bordered" onClick={deleteTask} style={{backgroundColor: "#FBFFF5"}}>
          Delete Task
        </ButtonStyled>
        <ButtonStyled variant="bordered" onClick={saveTask} style={{backgroundColor: "#DDFFB2"}}>
          Save Changes
        </ButtonStyled>
      </ButtonWrapper>
    </Background>
  );
};
