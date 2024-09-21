import styled from "@emotion/styled";
import { FONTS } from "../../shared/consts/index.js";
import { Button } from "shared/components";
import React from "react";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export const Header = styled.input`
  font-family: Poppins, sans-serif;
  ${FONTS.header3};
  margin: 30px;
  text-align: center;
  background: transparent;
  border: none;
  outline: none;
  resize: none;
`;

export const Text = styled.div`
  ${FONTS.body3};
  margin: 15px 15px 15px 15px;
`;

export const InputField = styled.textarea`
  background-color: #fbfff5;
  border-radius: 30px;
  margin: 15px 15px 15px 15px;
  height: 113px;
  padding-top: 10px;
  padding-left: 10px;
  outline: none;
  resize: none;
  font-size: 20px;
  font-family: Poppins, sans-serif;
  border: none;
`;

export const Background = styled.div`
  background-color: #f1ffdf;
  border-radius: 30px;
  margin: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 390px;
`;

export const DatePick = ({ className, taskDate, setTaskDate }) => {
  return (
    <DatePicker
      className={className}
      selected={taskDate}
      onChange={(date) => setTaskDate(date)}
      minDate={new Date()}
    />
  );
};
export const DatePickerStyled = styled(DatePick)`
  background: transparent;
  border: none;
  width: 200px;
  outline: none;
  font-family: Poppins, sans-serif;
  font-size: 24px;
  font-weight: 500;
  line-height: 24px;
`;

export const DatePickerWrapper = styled.div`
  display: flex;
  margin-right: 30px;
  align-items: center;
`;

export const TagsPanel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
  margin-left: 15px;
  margin-right: 15px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonStyled = styled(Button)`
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  margin-right: 15px;
  margin-left: 15px;
  width: fit-content;
  padding: 5px 30px 5px 30px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 15px;
  justify-content: space-around;
`;
