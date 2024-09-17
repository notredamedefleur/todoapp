import { LeftPanel } from "../widgets/LeftPanel/index.jsx";
import { TaskPanel } from "../widgets/TaskPanel/index.jsx";
import { RightPanel } from "../widgets/RightPanel/index.jsx";
import { Wrapper } from "./styles.js";
import { useState } from "react";

export const ToDoPage = ({ className }) => {
  const [taskPanelDisplay, setTaskPanelDisplay] = useState("all");
  const [tasks, setTasks] = useState([]);
  const [rightPanelVisibility, setRightPanelVisibility] = useState(false);
  const [taskId, setTaskId] = useState(crypto.randomUUID());
  const [editMode, setEditMode] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [taskName, setTaskName] = useState("New Task");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState(new Date());
  const [tags, setTags] = useState([]);
    const [currentTags, setCurrentTags] = useState([]);

  function handleClick(status) {
    setTaskPanelDisplay(status);
  }

  function addNewTask() {
      if (rightPanelVisibility === true) {
          setTaskToEdit(null);
          setRightPanelVisibility(false);
          return;
      }
      setTaskId(crypto.randomUUID());
      setTaskName("New Task");
      setTaskDescription("");
      setTaskDate(new Date());
      setEditMode(false);
      setRightPanelVisibility(true);
  }

  function toggleRightPanelVisibility() {
    setRightPanelVisibility(!rightPanelVisibility);
  }

  function toggleEditMode() {
    setEditMode(!editMode);
  }

  function handleTagClick() {
      console.log('fire')
  }

  return (
    <div className={className}>
      <Wrapper>
        <LeftPanel handleClick={handleClick} tags={tags} />
        <TaskPanel
          taskPanelDisplay={taskPanelDisplay}
          addNewTask={addNewTask}
          tasks={tasks}
          setTasks={setTasks}
          toggleRightPanelVisibility={toggleRightPanelVisibility}
          setEditMode={setEditMode}
          setTaskToEdit={setTaskToEdit}
          taskToEdit={taskToEdit}
          setTaskName={setTaskName}
          setTaskDescription={setTaskDescription}
          setTaskDate={setTaskDate}
          editMode={editMode}
          setTaskId={setTaskId}
        />
      </Wrapper>
      <RightPanel
        toggleRightPanelVisibility={toggleRightPanelVisibility}
        rightPanelVisibility={rightPanelVisibility}
        tasks={tasks}
        setTasks={setTasks}
        taskId={taskId}
        setTaskId={setTaskId}
        editMode={editMode}
        taskToEdit={taskToEdit}
        taskName={taskName}
        setTaskName={setTaskName}
        taskDescription={taskDescription}
        setTaskDescription={setTaskDescription}
        taskDate={taskDate}
        setTaskDate={setTaskDate}
        setEditMode={setEditMode}
        tags={tags}
        setTags={setTags}
        setTaskToEdit={setTaskToEdit}
        currentTags={currentTags}
        setCurrentTags={setCurrentTags}
        handleTagClick={handleTagClick}
      />
    </div>
  );
};
