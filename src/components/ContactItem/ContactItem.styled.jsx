import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;
  width: 600px;
  padding: 20px;
`;

export const Items = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 400px;
  height: 40px;
  padding: 5px;
  font-size: 16px;
  background-color: white;
  border-radius: 8px;
  border: 1px solid rgb(38, 153, 15);
`;

export const Button = styled.button`
  width: 80px;
  height: 30px;
  color: white;
  font-size: 14px;
  cursor: pointer;
  background-color: #094b07;
  border-radius: 8px;
  border: 1px solid rgb(26, 103, 11);
`;
