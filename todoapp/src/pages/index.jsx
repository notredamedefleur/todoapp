import { LeftPanel } from "../widgets/LeftPanel/index.jsx";
import { TaskPanel } from "../widgets/TaskPanel/index.jsx";
import { RightPanel } from "../widgets/RightPanel/index.jsx";
import { Wrapper } from "./styles.js";
import { useState } from "react";

export const ToDoPage = ({ className }) => {

  const [taskPanelDisplay, setTaskPanelDisplay] = useState("all");
  const [tasks, setTasks] = useState([]);
  const [rightPanelVisibility, setRightPanelVisibility] = useState(true);

  function handleClick(status) {
    setTaskPanelDisplay(status);
  }

  function toggleRightPanelVisibility() {
      setRightPanelVisibility(!rightPanelVisibility);
  }



  return (
    <div className={className}>
      <Wrapper>
        <LeftPanel handleClick={handleClick} />
        <TaskPanel taskPanelDisplay={taskPanelDisplay} handleClick={toggleRightPanelVisibility} />
      </Wrapper>
      <RightPanel rightPanelVisibility={rightPanelVisibility} />
    </div>
  );
};
