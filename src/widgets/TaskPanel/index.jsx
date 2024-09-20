import {
  AddNewTask,
  Header,
  HeaderWrapper,
  TabsWrapper,
} from "./styles.jsx";
import { Wrapper } from "./styles.jsx";
import { Tab } from "./components/Tab/index.jsx";
import { useMemo } from "react";
import { tabList } from "./consts.js";

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const TaskPanel = ({
  taskPanelDisplay,
  addNewTask,
  tasks,
  setTasks,
  toggleRightPanelVisibility,
  setEditMode,
  setTaskToEdit,
  taskToEdit,
  editMode,
  setTaskId,
  tagToFilter,
}) => {

  const allTabs = useMemo(
    () =>
      tabList.map((tab) => (
        <Tab
          key={tab}
          taskPanelDisplay={tab}
          tasks={tasks}
          setTasks={setTasks}
          toggleRightPanelVisibility={toggleRightPanelVisibility}
          setEditMode={setEditMode}
          setTaskToEdit={setTaskToEdit}
          taskToEdit={taskToEdit}
          editMode={editMode}
          setTaskId={setTaskId}
          tagToFilter={tagToFilter}
        />
      )),
    [tasks],
  );

  return (
    <Wrapper>
      <HeaderWrapper>
        <Header>TASKS</Header>
        <AddNewTask onClick={addNewTask}>+ Add New Task</AddNewTask>
      </HeaderWrapper>
      {taskPanelDisplay === "all" ? (
        <TabsWrapper>{allTabs}</TabsWrapper>
      ) : (
        <Tab
          key={taskPanelDisplay}
          taskPanelDisplay={capitalize(taskPanelDisplay)}
          tasks={tasks}
          setTasks={setTasks}
          toggleRightPanelVisibility={toggleRightPanelVisibility}
          setEditMode={setEditMode}
          setTaskToEdit={setTaskToEdit}
          taskToEdit={taskToEdit}
          editMode={editMode}
          setTaskId={setTaskId}
          tagToFilter={tagToFilter}
        />
      )}
    </Wrapper>
  );
};
