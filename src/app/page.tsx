"use client";
import { todo } from "./\btypes";
import { Search } from "./components/Inputs";
import { DoneList, TodoList } from "./components/List";
import { useLoadTodos } from "./hooks";

export default function Home() {
  const { data } = useLoadTodos();
  const todoList: todo[] = data?.filter((v: todo) => !v.isCompleted) || [];
  const doneList: todo[] = data?.filter((v: todo) => v.isCompleted) || [];

  return (
    <div className="w-[100%] h-[100%] px-48">
      <Search />
      <div className="pt-4 flex gap-2 md:flex-row">
        <TodoList todoList={todoList} />
        <DoneList doneList={doneList} />
      </div>
    </div>
  );
}
