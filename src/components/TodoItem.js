import React, { useCallback, useState } from "react";
import { Button, CheckBox, TextBox, TodoItemBox } from "../Styled/todoItem-styled";
import { useDispatch } from "react-redux";
import { todoRemove, todoToggle, todoUpdate } from "../reducer/Todo";
import { FaRegSquare, FaRegCheckSquare } from "react-icons/fa";
import { TiDeleteOutline } from "react-icons/ti";
import { BiPencil } from "react-icons/bi";

const TodoItem = ({ todo }) => {
    const { id, text, isCompleted } = todo;
    const [readOnly, setReadOnly] = useState(true);
    const [updateText, setUpdateText] = useState(text);
    const dispatch = useDispatch();

    const onChangeText = useCallback((e) => {
        const { value } = e.target;
        setUpdateText(value);
    }, [updateText]);

    const updateTodo = () => {
        if (!isCompleted) {
            setReadOnly(false);
        } else {
            setReadOnly(true);
        }
    };

    return (
        <TodoItemBox>
            <CheckBox onClick={() => dispatch(todoToggle(id))}>
                {isCompleted ? (
                    <FaRegCheckSquare size="25px" color="#84a98c" />
                ) : (
                    <FaRegSquare size="25px" />
                )}
            </CheckBox>
            <TextBox name="text" readOnly={readOnly} defaultValue={text} checked={isCompleted} onChange={onChangeText} onBlur={() => dispatch(todoUpdate(id, updateText))} />
            {!isCompleted ? (
                <Button onClick={updateTodo}>
                <BiPencil size="20px" color="#a5a58d" />
                </Button>
            ) : (
                <></>
            )}
            <Button onClick={() => dispatch(todoRemove(id))}>
                <TiDeleteOutline size="30px" color="#e56b6f" />
            </Button>
        </TodoItemBox>
    )
};

export default TodoItem;