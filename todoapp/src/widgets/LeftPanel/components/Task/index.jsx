import {Checkbox, TaskStyled} from "./styles.js";
import {Divider} from "../../../../shared/components/Divider/index.jsx";


export const Task = ({taskName = 'default', isChecked = true, handleClick}) => {
    console.log(isChecked);
    return (
        <>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: "space-between"}}>
        <TaskStyled>{taskName}</TaskStyled>
                <Checkbox type='checkbox' isChecked={isChecked} onClick={handleClick} />
                </div>
            <Divider />
        </>
    )
}