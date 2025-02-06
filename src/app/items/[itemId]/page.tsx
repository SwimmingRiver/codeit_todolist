"use client";

import { useLoadTodo, useRemoveTodo } from "@/app/hooks";
import useEditTodo from "@/app/hooks/useEditTodo";
import { useParams } from "next/navigation";
import { it } from "node:test";

function Items() {
  const { itemId } = useParams();
  const test = {
    name: "bye",
    isCompleted: false,
    memo: "",
    imageUrl: "",
  };
  if (!itemId) {
    return "nothing";
  }
  if (typeof itemId === "string") {
    const { mutate: edit } = useEditTodo(itemId);
    const { mutate: remove } = useRemoveTodo();
    const { data } = useLoadTodo(itemId);
    const handleEdit = () => {
      edit(test);
    };
    const handleRemove = () => {
      remove(itemId);
    };
    return (
      <div>
        <div>{data?.name}</div>
        <div>{data?.memo}</div>
        {data?.imageUrl && <img src={data.imageUrl} />}
        <button onClick={handleEdit}>수정하기</button>
        <button onClick={handleRemove}>삭제하기</button>
      </div>
    );
  }
}
export default Items;
