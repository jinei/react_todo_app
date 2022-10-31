import { useState, useEffect } from "react";
import type { TodoType } from "../types/TodoType";

export const useFetchTodoList = () => {
    // TODOリスト
    const [todoList, setTodoList] = useState<TodoType[]>([]);

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
            const categoryName = fetchCategoryName(categoryId);
            todo.category_name = categoryName;
        });

        setTodoList(data);

    }, []);

    return { todoList };
};

/**
 * カテゴリー名の取得
 * 
 * @param categoryId 
 * @returns カテゴリー名
 */
const fetchCategoryName = (categoryId: number) => {
    switch (categoryId) {
        case 1:
            return "趣味";
        case 2:
            return "仕事";
        case 3:
            return "その他";
        default:
            return "";
    };
};