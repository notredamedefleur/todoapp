import styled from "@emotion/styled";

export const Wrapper = styled.span({
    border: "1px solid black",
    borderRadius: '10px',
    padding: '5px 15px',
    margin: '5px'
}, (props) => ({
  backgroundColor: props.backgroundColor,
}));
