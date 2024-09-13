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

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const Tab = ({ taskPanelDisplay }) => {
  if (taskPanelDisplay === "All")
    return (
      <TabsWrapper>
        <Tab taskPanelDisplay={"Today"}></Tab>
        <Tab taskPanelDisplay={"Upcoming"}></Tab>
        <Tab taskPanelDisplay={"Finished"}></Tab>
      </TabsWrapper>
    );

  return (
    <div>
      <ListHeader>{taskPanelDisplay}</ListHeader>
      <Divider />
      <TaskList></TaskList>
    </div>
  );
};

export const TaskPanel = ({ taskPanelDisplay, handleClick }) => {
  return (
    <Wrapper>
      <HeaderWrapper>
        <Header>TASKS</Header>
        <AddNewTask onClick = {handleClick}>+ Add New Task</AddNewTask>
      </HeaderWrapper>
      <Tab taskPanelDisplay={capitalize(taskPanelDisplay)}></Tab>
    </Wrapper>
  );
};
