import {Wrapper} from "./styles.js";


export const Tag = ({name, backgroundColor}) => {
    return (
        <Wrapper backgroundColor={backgroundColor}>
            {name}
        </Wrapper>
    )
}