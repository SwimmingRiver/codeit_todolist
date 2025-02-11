import { todo } from "@/app/\btypes";
import useEditTodo from "@/app/hooks/useEditTodo";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function TodoListItem({ item }: { item: todo }) {
  const { mutate: checkComplete } = useEditTodo(`${item.id}`);
  const handleComplete = () => {
    checkComplete({
      name: item.name,
      memo: item.memo,
      imageUrl: item.imageUrl,
      isCompleted: true,
    });
  };
  return (
    <div
      className="mt-2 rounded-full border-2 border-black p-2 flex items-center gap-2"
      key={item.id}
    >
      <Image
        onClick={handleComplete}
        src={item.isCompleted ? "/checkButton.svg" : "/uncheckButton.svg"}
        alt="checkButton"
        width={25}
        height={25}
      />
      <Link href={`/items/${item.id}`} key={item.id}>
        <span>{item.name}</span>
      </Link>
    </div>
  );
}

export default TodoListItem;
