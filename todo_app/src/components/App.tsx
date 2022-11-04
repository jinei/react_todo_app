import { FC } from "react";
import classes from "../css/App.module.scss";
import { useFetchTodoList } from "../hooks/useFetchTodoList";
import { TodoList } from "./TodoList";

export const App: FC = () => {
    // TODOリスト
    const { todoList } = useFetchTodoList();

    return (
        <div className={classes.wrap}>

            {/* タイトル */}
            <h1 className={classes.title}>TODOアプリ In React</h1>

            {/* 追加 */}
            <div className={classes.condition}>

                {/* カテゴリー */}
                <select className={classes.select_box}>
                    <option value="1">趣味</option>
                    <option value="2">仕事</option>
                    <option value="3">その他</option>
                </select>

                {/* テキストボックス */}
                <input type="text" className={classes.input_text} />

                {/* 追加ボタン */}
                <button className={classes.button}>ADD</button>

            </div>

            {/* TODOリスト */}
            <TodoList todoList={todoList} />
        </div >
    )
};
