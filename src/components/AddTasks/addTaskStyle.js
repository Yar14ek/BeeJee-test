import styled from "styled-components";
import { Field } from "formik";

export const StuledField = styled(Field)`
  border: 1px solid tomato;
  border-radius: 2px;
  margin-right: 10px;
  margin-top: 10px;
  text-align: center;
  padding: 10px 0;
`;
export const StuledBtn = styled.button`
  background-color: azure;
  padding: 10px 2px;
  border: 1px solid tomato;
  border-radius: 5px;
  cursor: pointer;
`;
export const FormStyle = styled.form`
  margin-top: 15px;
`;
export const ErrorDiv = styled.div`
  margin-left:175px;
  color:red;
`;
