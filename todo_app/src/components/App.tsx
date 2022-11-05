import { FC } from "react";
import classes from "../css/App.module.scss";
import { useTodoList } from "../hooks/useTodoList";
import { TodoList } from "./TodoList";
import type { TodoType } from "../types/TodoType";
import { InputForm } from "./InputForm";

export const App: FC = () => {
    // TODOリスト
    const { todoList, addTodoList, deleteTodoList } = useTodoList();

    // Addボタン押下
    const addClick = (categoryId: number, text: string): void => {
        const todo: TodoType = {
            category_id: categoryId,
            text: text
        }
        addTodoList(todo);
    }

    // DELETEボタン押下
    const onClickDelete = (index: number): void => {
        deleteTodoList(index);
    }

    return (
        <div className={classes.wrap}>

            {/* タイトル */}
            <h1 className={classes.title}>TODOアプリ In React</h1>

            {/* 入力フォーム */}
            <InputForm addClick={addClick} />

            {/* TODOリスト */}
            <TodoList todoList={todoList} onClickDelete={onClickDelete} />
        </div >
    )
};
