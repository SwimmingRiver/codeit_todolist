import { todo } from "@/app/\btypes";
import Image from "next/image";
import Link from "next/link";
import useEditTodo from "@/app/hooks/useEditTodo";
import React from "react";

function DoneListItem({ item }: { item: todo }) {
  const { mutate: unCheckComplete } = useEditTodo(`${item.id}`);
  const handleComplete = () => {
    unCheckComplete({
      name: item.name,
      memo: item.memo,
      imageUrl: item.imageUrl,
      isCompleted: false,
    });
  };
  return (
    item.isCompleted && (
      <div
        className="w-100 mt-2 rounded-full border-2 border-black p-2 flex items-center gap-2 bg-violet-100"
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
          <span className="line-through">{item.name}</span>
        </Link>
      </div>
    )
  );
}

export default DoneListItem;
