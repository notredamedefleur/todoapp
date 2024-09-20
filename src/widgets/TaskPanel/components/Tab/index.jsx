import { ListHeader } from "./styles.js";
import { Divider } from "shared/components/Divider";
import { TaskList } from "./components/TaskList";

export const Tab = ({
  taskPanelDisplay,
  tasks,
  setTasks,
  toggleRightPanelVisibility,
  setTaskToEdit,
  setEditMode,
  editMode,
  setTaskId,
  tagToFilter,
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
        editMode={editMode}
        setTaskId={setTaskId}
        tagToFilter={tagToFilter}
      />
    </div>
  );
};
