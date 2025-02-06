"use client";
import { useCreateTodo } from "@/app/hooks";
import React, { ChangeEvent, useState } from "react";

function Search() {
  const [inputValue, setInputValue] = useState("");
  const { mutate } = useCreateTodo();
  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const submitHandler = () => {
    mutate(inputValue);

    setInputValue("");
  };

  return (
    <div>
      <input
        placeholder="할 일을 입력해주세요"
        value={inputValue}
        onChange={inputHandler}
      />
      <button onClick={submitHandler}>추가하기</button>
    </div>
  );
}

export default Search;
