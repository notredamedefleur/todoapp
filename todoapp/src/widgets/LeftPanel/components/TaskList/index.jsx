import { TaskListStyled } from "./styles.js";
import { Task } from "../Task/index.jsx";
import { func } from "prop-types";
import { useEffect, useState } from "react";

export const TaskList = ({
  tasks,
  setTasks,
  taskPanelDisplay,
  toggleRightPanelVisibility,
  setEditMode,
  editMode,
  setTaskToEdit,
  taskToEdit,
  setTaskName,
  setTaskDescription,
  setTaskDate,
    setTaskId
}) => {
  const [filteredTasks, setFilteredTasks] = useState(tasks);

  function toggleCheck(e, taskId) {
    e.stopPropagation();
    let tempTask = tasks.find((task) => task.id === taskId);
    tempTask.isChecked = !tempTask.isChecked;
    const newTasks = tasks.map((task) =>
      task.id === taskId ? tempTask : task,
    );
    setTasks(newTasks);
  }

  function editTask(taskId) {
    if (editMode === true) {
      toggleRightPanelVisibility();
      setEditMode(false);
      setTaskToEdit(null);
      return;
    }
    toggleRightPanelVisibility();
    setTaskId(taskId);
    editMode ? setEditMode(false) : setEditMode(true);
    setTaskToEdit(tasks.find((task) => task.id === taskId));
  }

  useEffect(() => {
    if (taskPanelDisplay === "Today") {
      setFilteredTasks(
        tasks.filter(
          (task) =>
            task.date.getDay() === new Date().getDay() &&
            task.isChecked === false,
        ),
      );
      return;
    }
    if (taskPanelDisplay === "Upcoming") {
      setFilteredTasks(
        tasks.filter(
          (task) =>
            task.date.getDay() !== new Date().getDay() &&
            task.isChecked === false,
        ),
      );
      return;
    }
    if (taskPanelDisplay === "Finished") {
      setFilteredTasks(tasks.filter((task) => task.isChecked === true));
      return;
    }
    setFilteredTasks(tasks);
  }, [taskPanelDisplay, tasks]);

  const tasksToRender = filteredTasks.map((task) => (
    <Task
      key={task.id}
      taskName={task.name}
      isChecked={task.isChecked}
      toggleCheck={(e) => toggleCheck(e, task.id)}
      editTask={() => editTask(task.id)}
    />
  ));
  return <TaskListStyled>{tasksToRender}</TaskListStyled>;
};
