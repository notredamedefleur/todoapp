import { LeftPanel } from "../widgets/LeftPanel/index.jsx";
import { TaskPanel } from "../widgets/TaskPanel/index.jsx";
import { RightPanel } from "../widgets/RightPanel/index.jsx";
import { Wrapper } from "./styles.js";
import { useEffect, useState } from "react";
import { LoginPopUp } from "../widgets/LoginPopUp/index.jsx";

export const ToDoPage = ({ className }) => {
  const [taskPanelDisplay, setTaskPanelDisplay] = useState("all");
  const [tasks, setTasks] = useState(getFromLS("tasks") || []);
  const [rightPanelVisibility, setRightPanelVisibility] = useState(false);
  const [taskId, setTaskId] = useState(crypto.randomUUID());
  const [editMode, setEditMode] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [taskName, setTaskName] = useState("New Task");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState(new Date());
  const [tags, setTags] = useState(getFromLS("tags") || []);
  const [currentTags, setCurrentTags] = useState([]);
  const [tagToFilter, setTagToFilter] = useState(null);
  const [userName, setUserName] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [showModal, setShowModal] = useState(true);

  function getFromLS(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  function setToLS() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("tags", JSON.stringify(tags));
    localStorage.setItem("userName", userName);
    localStorage.setItem("userAvatar", userAvatar);
  }

  function clearLs() {
    localStorage.clear();
    setTasks([]);
    setTags([]);
  }

  useEffect(() => {
    setToLS();
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

  function toggleEditMode() {
    setEditMode(!editMode);
  }

  function handleTagClick(tag) {
    setTagToFilter(tag);
  }

  function showAllTags() {
    setTagToFilter(null);
  }

  return (
    <>
      <LoginPopUp
        setUserName={setUserName}
        setUserAvatar={setUserAvatar}
        setShowModal={setShowModal}
        showModal={showModal}
      />
      <div className={className}>
        <Wrapper>
          <LeftPanel
            userAvatar={userAvatar}
            clearLS={clearLs}
            handleClick={handleClick}
            tags={tags}
            handleTagClick={handleTagClick}
            showAllTags={showAllTags}
            userName={userName}
            getFromLS={getFromLS}
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
      </div>
    </>
  );
};
