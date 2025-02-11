import { todo } from "@/app/\btypes";

import Image from "next/image";
import React from "react";
import { TodoListItem } from "../../ListItems";

function TodoList({ todoList }: { todoList: todo[] }) {
  return (
    <div className="w-[580px]">
      <Image src={"/todo.svg"} alt="todo" width={100} height={100} />
      {todoList?.map((items: todo) => (
        <TodoListItem key={items.id} item={items} />
      ))}
    </div>
  );
}

export default TodoList;
