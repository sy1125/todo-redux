import styled from "styled-components";

export const TodoInputBox = styled.div`
  border-top: 1px solid #eddcd2;
  display: flex;
  margin: 0 1rem;
  padding: 1rem;
`;

export const Input = styled.input`
  flex: 1;
  outline: none;
  border: none;
  background: transparent;
`;

export const AddButton = styled.button`
  outline: none;
  border: none;
  border-radius: 20px 20px;
  background-color: #ffd5c2;
  padding: 1rem 2rem;
  color: #e29578;
  font-size: 15px;
  cursor: pointer;
  &:hover {
    background-color: #e29578;
    color: #ffffff;
  }
  &:active {
    background-color: #e29578;
    color: #ffffff;
  }
`;