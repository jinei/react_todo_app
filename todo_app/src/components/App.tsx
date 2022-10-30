import { FC, useEffect, useState } from "react";
import classes from "../css/App.module.scss";
import type { TodoType } from "../types/TodoType";

export const App: FC = () => {

    // TODOリスト
    const [todoList, setTodoList] = useState<TodoType[]>([]);

    // TODOリスト取得
    useEffect(() => {
        const data: TodoType[] = [
            {
                category: 1,
                text: "買い物"
            },
            {
                category: 2,
                text: "打ち合わせ"
            },
            {
                category: 3,
                text: "ドライブ"
            },
            {
                category: 1,
                text: "筋トレ"
            }
        ];
        setTodoList(data);
    }, []);

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
            <div className={classes.todo_list}>
                {todoList.map((todo, index) => (
                    <div className={classes.row}>
                        <div className={classes.category}>{todo.category}</div>
                        <div className={classes.text}>{todo.text}</div>
                    </div>
                ))}
            </div >

        </div >
    )
};
