import { TaskListStyled } from "./styles.js";
import { Task } from "./components/Task";
import { useCallback, useEffect, useState } from "react";

export const TaskList = ({
  tasks,
  setTasks,
  taskPanelDisplay,
  toggleRightPanelVisibility,
  setEditMode,
  editMode,
  setTaskToEdit,
  setTaskId,
  tagToFilter,
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

  const mapTagsId = useCallback((tags) => tags.map((tag) => tag.tagName), []);

  useEffect(() => {
    let tasksToFilter = tasks;
    if (tagToFilter) {
      tasksToFilter = tasks.filter((task) =>
        mapTagsId(task.tags).includes(tagToFilter.tagName),
      );
    }
    if (taskPanelDisplay === "Today") {
      setFilteredTasks(
        tasksToFilter.filter(
          (task) =>
            new Date(task.date).getDay() === new Date().getDay() &&
            task.isChecked === false,
        ),
      );
      return;
    }
    if (taskPanelDisplay === "Upcoming") {
      setFilteredTasks(
        tasksToFilter.filter(
          (task) =>
            new Date(task.date).getDay() !== new Date().getDay() &&
            task.isChecked === false,
        ),
      );
      return;
    }
    if (taskPanelDisplay === "Finished") {
      setFilteredTasks(tasksToFilter.filter((task) => task.isChecked === true));
      return;
    }
    setFilteredTasks(tasksToFilter);
  }, [taskPanelDisplay, tasks, tagToFilter]);

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
