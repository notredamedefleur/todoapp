import { TaskListStyled } from "./styles.js";
import { Task } from "../Task/index.jsx";
import { func } from "prop-types";
import { useEffect, useState } from "react";

export const TaskList = ({ tasks, setTasks, taskPanelDisplay }) => {
  const [filteredTasks, setFilteredTasks] = useState(tasks);
  console.log({ tasks });
  function toggleCheck(taskId) {
    let tempTask = tasks.find((task) => task.id === taskId);
    console.log(tempTask);
    tempTask.isChecked = !tempTask.isChecked;
    tasks.map((task) => (task.id === taskId ? tempTask : task));
    setTasks(tasks);

    console.log(1);
  }
  console.log({filteredTasks});
  console.log(taskPanelDisplay);
  useEffect(() => {
    if (taskPanelDisplay === "Today") {
      setFilteredTasks(
        tasks.filter((task) => task.date.getDay() === new Date().getDay()),
      );
      return;
    }
    if (taskPanelDisplay === "Upcoming") {
      setFilteredTasks(
        tasks.filter((task) => task.date.getDay() !== new Date().getDay()),
      );
      return;
    }
    if (taskPanelDisplay === "Finished") {
      setFilteredTasks(tasks.filter((task) => task.isChecked === true));
      return;
    }
    setFilteredTasks(tasks);
  }, [taskPanelDisplay, tasks]);

  let tasksToRender = filteredTasks.map((task) => (
    <Task
      key={task.id}
      taskName={task.name}
      isChecked={task.isChecked}
      handleClick={() => toggleCheck(task.id)}
    />
  ));
  return <TaskListStyled>{tasksToRender}</TaskListStyled>;
};
