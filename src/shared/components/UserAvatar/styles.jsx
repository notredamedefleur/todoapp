import styled from "@emotion/styled";

export const UserImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const UserImgPick = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 10px;
  ${(props) => (props.isSelected ? "border: 2px solid black" : null)};
`;
