import React from "react";
import { Template, Title } from "../Styled/common-styled";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const TodoTemplate = () => {
    return (
        <Template>
            <Title>할 일</Title>
            <TodoInput />
            <TodoList />
        </Template>
    )
}

export default TodoTemplate;