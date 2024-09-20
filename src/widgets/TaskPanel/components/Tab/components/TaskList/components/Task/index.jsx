import { Checkbox, TaskStyled } from "./styles.js";
import { Divider } from "shared/components";

export const Task = ({
  taskName = "default",
  isChecked = true,
  toggleCheck,
  editTask,
}) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        onClick={editTask}
      >
        <TaskStyled>{taskName}</TaskStyled>
        <Checkbox
          type="checkbox"
          isChecked={isChecked}
          onClick={(e) => toggleCheck(e)}
        />
      </div>
      <Divider />
    </>
  );
};
