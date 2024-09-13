import {TaskStyled} from "./styles.js";
import {Divider} from "../../../../shared/components/Divider/index.jsx";

export const Task = ({name}) => {
    return (
        <>
        <TaskStyled>{name}</TaskStyled>
            <Divider />
        </>
    )
}