import styled from "styled-components";

export const TodoItemBox = styled.div`
  display: flex;
  margin: 0 1rem;
  padding: 1rem;
  border-bottom: 1px solid #eddcd2;
`;

export const CheckBox = styled.div`
  display: inline;
  margin: 0 1rem;
  cursor: pointer;
  color: ${(props) => props.color || "gray"};
`;

export const TextBox = styled.input`
  flex: 1;
  display: inline;
  border: none;
  outline: none;
  background-color: transparent;
  width: 500px;
  cursor: default;
  text-decoration: ${(props) => (props.checked ? "line-through" : "none")};
  color: ${(props) => (props.checked ? "gray" : "black")};
`;

export const Button = styled.div`
  display: inline;
  width: 30px;
  background-color: none;
  border: none;
  cursor: pointer;
`;