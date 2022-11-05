import { useCallback } from "react";
import type { TodoType } from "../types/TodoType";
import { useFetchCategory } from "./useFetchCategory";

/**
 * Todoリストの制御に関するカスタムフック
 */
export const useTodoList = () => {

    // カテゴリー名取得関数
    const { fetchCategoryName } = useFetchCategory();

    /**
     * TODOリスト取得関数
     * 
     * @returns TodoType[] TODOリスト
     */
    const fetchTodoList = useCallback(() => {
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

        return data;
    }, []);

    return { fetchTodoList };
};