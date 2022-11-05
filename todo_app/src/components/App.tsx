import { ChangeEvent, FC, useState } from "react";
import classes from "../css/App.module.scss";
import { useTodoList } from "../hooks/useTodoList";
import { TodoList } from "./TodoList";
import type { TodoType } from "../types/TodoType";

export const App: FC = () => {
    // TODOリスト
    const { todoList, addTodoList } = useTodoList();

    // テキストボックス制御
    const [inputTodo, setInputTodo] = useState<string>("");
    const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
        setInputTodo(e.target.value);
    }

    // セレクトボックス制御
    const [inputCategoryId, setInputCategoryId] = useState<number>(0);
    const onChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        const selectValue: number = parseInt(e.target.value, 10);
        setInputCategoryId(selectValue);
    }

    // ボタン押下
    const onClickAdd = () => {
        const todo: TodoType = {
            category_id: inputCategoryId,
            text: inputTodo
        }
        addTodoList(todo);
        setInputTodo("");
    }

    return (
        <div className={classes.wrap}>

            {/* タイトル */}
            <h1 className={classes.title}>TODOアプリ In React</h1>

            {/* 追加 */}
            <div className={classes.condition}>

                {/* カテゴリー */}
                <select className={classes.select_box} onChange={onChangeSelect}>
                    <option value="1">趣味</option>
                    <option value="2">仕事</option>
                    <option value="3">その他</option>
                </select>

                {/* テキストボックス */}
                <input type="text" className={classes.input_text} onChange={onChangeText} value={inputTodo} />

                {/* 追加ボタン */}
                <button className={classes.button} onClick={onClickAdd}>ADD</button>

            </div>

            {/* TODOリスト */}
            <TodoList todoList={todoList} />
        </div >
    )
};
