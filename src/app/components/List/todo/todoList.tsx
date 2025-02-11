import { todo } from "@/app/\btypes";

import Image from "next/image";
import React from "react";
import { TodoListItem } from "../../ListItems";

function TodoList({ todoList }: { todoList: todo[] }) {
  return (
    <>
      {todoList ? (
        <div className="lg:w-[580px] md:w-100 sm:w-100">
          <Image src={"/todo.svg"} alt="todo" width={100} height={100} />
          {todoList.map((items: todo) => (
            <TodoListItem key={items.id} item={items} />
          ))}
        </div>
      ) : (
        <Image
          src={"/emptyTodo.svg"}
          alt="todo empty"
          width={100}
          height={100}
        />
      )}
    </>
  );
}

export default TodoList;
