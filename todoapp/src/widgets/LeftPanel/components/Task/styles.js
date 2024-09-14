import styled from "@emotion/styled";

export const TaskStyled = styled.div`
  margin: 10px 0 10px 0;
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
`;

export const Checkbox = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  width: 22px;
  height: 22px;

  background-size: contain;
  
  ${(props) =>
    props.isChecked
      ? 'background-color: "blue"'
      : "background-color: 'red'"}
`