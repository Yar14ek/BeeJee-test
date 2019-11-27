import styled from "styled-components";
import {  Field } from "formik";


export const ModalContainer = styled.div`
  width: 400px;
  height: 300px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: #a1b6b6ba;
  left: 565px;
  top: 140px;
  border:1px solid black;
  border-radius:15px;
`;

export const ModalText = styled.p`
  margin-block-end: 0;
  font-weight: bold;
`;
export const AtentionModal = styled.p`
  font-weight: bold;
  font-size: 20px;
  color: red;
  margin: 33% 20%;
`;
export const CloseModal = styled.p`
  cursor: pointer;
  position: absolute;
  right: 25px;
  font-weight: bold;
`;
export const StuleField = styled(Field)`
  border: 1px solid tomato;
  border-radius:2px;
  padding:8px 0;
`;
export const FormStyle = styled.form`
  margin:0 auto;
  text-align:center;
  display:flex;
  flex-direction:column;
  margin-top:40px;
`;
export const StuleButton = styled.button`
margin: 0 auto;
margin-top:60px;
border: 1px solid tomato;
border-radius:9px;
padding:5px;
background-color:azure;
font-weight:bold;
width:100px ;

  
`;