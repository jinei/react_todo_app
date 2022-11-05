import { ChangeEvent, FC, useState } from "react";
import classes from "../css/App.module.scss";

type Props = {
  addClick: (categoryId: number, text: string) => void;
};

export const InputForm: FC<Props> = (props) => {

  const { addClick } = props;

  // テキストボックス制御
  const [inputTodo, setInputTodo] = useState<string>("");
  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setInputTodo(e.target.value);
  }

  // セレクトボックス制御
  const [inputCategoryId, setInputCategoryId] = useState<number>(1);
  const onChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectValue: number = parseInt(e.target.value, 10);
    setInputCategoryId(selectValue);
  }

  // Addボタン押下
  const onClickAdd = (): void => {
    addClick(inputCategoryId, inputTodo);
    setInputTodo("");
  }

  return (
    <>
      {/* 追加 */}
      <div className={classes.condition} >

        {/* カテゴリー */}
        <select className={classes.select_box} onChange={onChangeSelect} >
          <option value="1">趣味</option>
          <option value="2">仕事</option>
          <option value="3">その他</option>
        </select >

        {/* テキストボックス */}
        <input type="text" className={classes.input_text} onChange={onChangeText} value={inputTodo} />

        {/* 追加ボタン */}
        <button className={classes.button} onClick={onClickAdd}> ADD</button >

      </div >
    </>
  )
};