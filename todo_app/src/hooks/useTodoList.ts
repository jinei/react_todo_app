import { useState, useCallback, useEffect } from "react";
import type { TodoType } from "../types/TodoType";
import { useFetchCategory } from "./useFetchCategory";

/**
 * Todoリストの制御に関するカスタムフック
 */
export const useTodoList = () => {

    // Todoリスト
    const [todoList, setTodoList] = useState<TodoType[]>([]);

    // カテゴリー名取得関数
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
    }, [])

    /**
     * TODOリストの追加
     * 
     * @param todo
     */
    const addTodoList = useCallback((todo: TodoType) => {
        // 入力値のカテゴリー名の取得
        const categoryId = todo.category_id;
        const categoryName = fetchCategoryName(categoryId);
        todo.category_name = categoryName;

        // 配列に追加
        const tmp = [...todoList];
        tmp.push(todo);
        setTodoList(tmp);
    }, [todoList]);

    return { todoList, addTodoList };
};