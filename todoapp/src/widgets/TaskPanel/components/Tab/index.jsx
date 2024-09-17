import { ListHeader } from "./styles.js";
import { Divider } from "../../../../shared/components/Divider/index.jsx";
import { TaskList } from "../../../LeftPanel/components/TaskList/index.jsx";

export const Tab = ({
  taskPanelDisplay,
  tasks,
  setTasks,
  toggleRightPanelVisibility,
  toggleEditMode,
  taskToEdit,
  setTaskName,
  setTaskDescription,
  setTaskDate,
    setTaskToEdit,
    setEditMode,
    editMode,
    setTaskId
}) => {
  return (
    <div>
      <ListHeader>{taskPanelDisplay}</ListHeader>
      <Divider />
      <TaskList
        tasks={tasks}
        setTasks={setTasks}
        taskPanelDisplay={taskPanelDisplay}
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
    </div>
  );
};
