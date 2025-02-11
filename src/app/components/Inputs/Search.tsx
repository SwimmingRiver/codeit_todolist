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
  const keyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      submitHandler();
    }
  };
  const submitHandler = () => {
    mutate(inputValue);

    setInputValue("");
  };

  return (
    <div className="w-full flex gap-1">
      <input
        className="w-full h-[56px] rounded-full border-2 border-b-4 border-e-4 border-black p-4"
        placeholder="할 일을 입력해주세요"
        value={inputValue}
        onChange={inputHandler}
        onKeyDown={keyDownHandler}
      />

      <button
        onClick={submitHandler}
        className="w-[56px] sm:w-[56px] md:w-[120px] lg:w-[168px] h-[56px] rounded-full border-2 border-b-4 border-e-4 border-black p-4 bg-slate-200 flex items-center justify-center gap-2"
      >
        <Image src={"/plus.svg"} alt="plus" width={15} height={15} />
        <span className="hidden md:block md:text-[12px] lg:block">
          추가하기
        </span>
      </button>
    </div>
  );
}

export default Search;
