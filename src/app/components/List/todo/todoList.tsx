import { todo } from "@/app/\btypes";
import Link from "next/link";
import React from "react";

function TodoList({ todoList }: { todoList: todo[] }) {
  return (
    <div>
      todoList
      {todoList?.map((items: todo) => (
        <Link href={`/items/${items.id}`} key={items.id}>
          {items.name}
        </Link>
      ))}
    </div>
  );
}

export default TodoList;
