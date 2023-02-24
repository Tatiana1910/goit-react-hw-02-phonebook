import styled from 'styled-components';

import { Form, Field } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 65%;
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 288px;
  font-size: 14px;
`;

export const StyledInput = styled(Field)`
  width: 300px;
  height: 40px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid rgb(26, 103, 11);
`;

export const StyledButton = styled.button`
  width: 150px;
  height: 40px;

  color: white;
  font-size: 14px;
  cursor: pointer;
  background-color: #094b07;
  border-radius: 8px;
  border: 1px solid rgb(26, 103, 11);
`;
