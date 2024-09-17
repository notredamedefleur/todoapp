import {
  AddNewTask,
  FinishedTab,
  Header,
  HeaderWrapper,
  ListHeader,
  TabsWrapper,
  UpcomingTab,
} from "./styles.jsx";
import { Wrapper } from "./styles.jsx";
import { Task } from "../LeftPanel/components/Task/index.jsx";
import { Divider } from "../../shared/components/Divider/index.jsx";
import { TaskList } from "../LeftPanel/components/TaskList/index.jsx";
import { Tab } from "./components/Tab/index.jsx";

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
  setTaskName,
  setTaskDescription,
  setTaskDate,
    editMode,
    setTaskId
}) => {
  return (
    <Wrapper>
      <HeaderWrapper>
        <Header>TASKS</Header>
        <AddNewTask onClick={addNewTask}>+ Add New Task</AddNewTask>
      </HeaderWrapper>
      {taskPanelDisplay === "all" ? (
        <TabsWrapper>
          <Tab
            key={"Today"}
            taskPanelDisplay={"Today"}
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
          ></Tab>
          <Tab
            key={"Upcoming"}
            taskPanelDisplay={"Upcoming"}
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
          ></Tab>
          <Tab
            key={"Finished"}
            taskPanelDisplay={"Finished"}
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
          ></Tab>
        </TabsWrapper>
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
          setTaskName={setTaskName}
          setTaskDescription={setTaskDescription}
          setTaskDate={setTaskDate}
          editMode={editMode}
          setTaskId={setTaskId}
        ></Tab>
      )}
    </Wrapper>
  );
};
