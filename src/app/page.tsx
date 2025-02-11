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
    <div className="w-full h-full px-4 sm:px-8 md:px-16 lg:px-48">
      <Search />
      <div className="pt-4 flex flex-col gap-2 md:flex-col lg:flex-row">
        <TodoList todoList={todoList} />
        <DoneList doneList={doneList} />
      </div>
    </div>
  );
}
