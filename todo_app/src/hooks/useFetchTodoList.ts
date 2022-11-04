import { useState, useEffect } from "react";
import type { TodoType } from "../types/TodoType";
import { useFetchCategory } from "./useFetchCategory";

export const useFetchTodoList = () => {
    // TODOリスト
    const [todoList, setTodoList] = useState<TodoType[]>([]);
    const { fetchCategoryName } = useFetchCategory();

    useEffect(() => {
        // TODOリスト取得
        const data: TodoType[] = [
            {
                category_id: 1,
                text: "買い物"
            },
            {
                category_id: 2,
                text: "打ち合わせ"
            },
            {
                category_id: 3,
                text: "ドライブ"
            },
            {
                category_id: 1,
                text: "筋トレ"
            }
        ];

        data.forEach(todo => {
            const categoryId: number = todo.category_id;
            const categoryName: string = fetchCategoryName(categoryId);
            todo.category_name = categoryName;
        });

        setTodoList(data);

    }, []);

    return { todoList };
};