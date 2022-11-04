import { useState, useCallback } from "react";

/**
 * カテゴリー名の取得関数
 * 
 * @param categoryId 
 * @returns string カテゴリー名
 */
export const useFetchCategory = () => {

    /**
     * カテゴリー名の取得関数
     * 
     * @param categoryId 
     * @returns string カテゴリー名
     */
    const fetchCategoryName = useCallback((categoryId: number): string => {
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
    }, []);

    return { fetchCategoryName };
};