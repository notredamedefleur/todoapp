import {TaskListStyled} from "./styles.js";

export const TaskList = ({children}) => {
    return (
        <TaskListStyled>
            {children}
        </TaskListStyled>
    )
}