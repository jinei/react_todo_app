import { FC, memo } from "react";
import classes from "../css/App.module.scss";
import type { TodoType } from "../types/TodoType";

type Props = {
    todoList: TodoType[];
};

export const TodoList: FC<Props> = memo(props => {
    const { todoList } = props;
    return (
        <>
            {/* TODOリスト */}
            < div className={classes.todo_list} >
                {
                    todoList.map((todo, index) => (
                        <div className={classes.row} key={index}>
                            <div className={classes.category}>{todo.category_name}</div>
                            <div className={classes.text}>{todo.text}</div>
                        </div>
                    ))
                }
            </div >
        </>
    )
});