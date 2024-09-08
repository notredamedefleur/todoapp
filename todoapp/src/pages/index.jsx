import { LeftPanel } from "../widgets/LeftPanel/index.jsx";
import { TaskPanel } from "../widgets/TaskPanel/index.jsx";
import { RightPanel } from "../widgets/RightPanel/index.jsx";

export const ToDoPage = ({ className }) => {
  return (
    <div className={className}>
      <LeftPanel />
      <TaskPanel />
      <RightPanel />
    </div>
  );
};
