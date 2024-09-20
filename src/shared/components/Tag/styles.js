import styled from "@emotion/styled";

export const Wrapper = styled.span`
  //border: 1px solid black;
  border-radius: 30px;
  padding: 10px;
  margin: 5px;
  background-color: ${(props) => props.tagColor};
`;

export const TagInput = styled.input`
  width: fit-content;
  background-color: ${(props) => props.tagColor};
  &:disabled {
    color: black;
  }
  font-family: "Poppins", sans-serif;
  border: none;
  font-size: 16px;
  font-weight: 400;
`;

export const Span = styled.span`
  position: absolute;
  opacity: 0;
  z-index: -100;
  white-space: pre;
`;

export const Input = styled.input`
  min-width: 1px;
  border: none;
  border-radius: 30px;
  background-color: #ffcddf;
  padding: 5px 10px 5px 10px;
  &:disabled {
    color: black;
  }
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 400;
`;
