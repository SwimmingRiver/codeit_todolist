"use client";
import { useCreateTodo } from "@/app/hooks";
import Image from "next/image";
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
    <div className="w-[1016px] flex gap-1">
      <input
        className="w-[846px] h-[56px] rounded-full border-2 border-b-8 border-e-8 border-black p-4"
        placeholder="할 일을 입력해주세요"
        value={inputValue}
        onChange={inputHandler}
      />

      <button
        onClick={submitHandler}
        className="w-[168px] h-[56px] rounded-full border-2 border-b-8 border-e-8 border-black p-4 bg-color-slate-200 flex items-center justify-center gap-2"
      >
        <Image src={"/plus.svg"} alt="plus" width={15} height={15} />
        <span>추가하기</span>
      </button>
    </div>
  );
}

export default Search;
