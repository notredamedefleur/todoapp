import { LeftPanel } from "../widgets/LeftPanel/index.jsx";
import { TaskPanel } from "../widgets/TaskPanel/index.jsx";
import { RightPanel } from "../widgets/RightPanel/index.jsx";
import { Container, Wrapper } from "./styles.js";
import { useEffect, useState } from "react";
import { LoginPopUp } from "../widgets/LoginPopUp/index.jsx";
import { getFromLS } from "shared/utils";

export const ToDoPage = () => {
  const [taskPanelDisplay, setTaskPanelDisplay] = useState("all");
  const [tasks, setTasks] = useState(getFromLS("tasks") || []);
  const [rightPanelVisibility, setRightPanelVisibility] = useState(false);
  const [taskId, setTaskId] = useState(undefined);
  const [editMode, setEditMode] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState(undefined);
  const [tags, setTags] = useState(getFromLS("tags") || []);
  const [currentTags, setCurrentTags] = useState([]);
  const [tagToFilter, setTagToFilter] = useState(null);
  const [userName, setUserName] = useState(
    localStorage.getItem("userName") || "",
  );
  const [userAvatar, setUserAvatar] = useState(
    localStorage.getItem("userAvatar") || "",
  );
  const [showModal, setShowModal] = useState(!localStorage.getItem("userName"));

  function clearLs() {
    localStorage.clear();
    setTasks([]);
    setTags([]);
    setUserName("");
    setUserAvatar("./public/chicken.jpg");
    setShowModal(true);
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("tags", JSON.stringify(tags));
    localStorage.setItem("userName", userName);
    localStorage.setItem("userAvatar", userAvatar);
  }, [tasks, tags, userAvatar, userName]);

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

  function handleTagClick(tag) {
    setTagToFilter(tag);
  }

  function showAllTags() {
    setTagToFilter(null);
  }

  return (
    <>
      <Container>
        <Wrapper>
          <LeftPanel
            handleClick={handleClick}
            tags={tags}
            handleTagClick={handleTagClick}
            showAllTags={showAllTags}
            clearLS={clearLs}
            userName={userName}
            userAvatar={userAvatar}
          />
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
            tagToFilter={tagToFilter}
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
      </Container>

      <LoginPopUp
        setUserName={setUserName}
        setUserAvatar={setUserAvatar}
        setShowModal={setShowModal}
        showModal={showModal}
      />
    </>
  );
};
