import styled from 'styled-components';

import { Form, Field } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 65%;
  outline: 1px solid red;
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const StyledInput = styled(Field)`
  width: 300px;
  height: 40px;
  font-size: 16px;
`;

export const StyledButton = styled.button`
  width: 150px;
  height: 40px;
`;
