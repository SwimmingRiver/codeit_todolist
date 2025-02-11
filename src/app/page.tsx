"use client";
import { todo } from "./\btypes";
import { Search } from "./components/Inputs";
import { DoneList, TodoList } from "./components/List";
import { useLoadTodos } from "./hooks";

export default function Home() {
  const { data } = useLoadTodos();
  const todoList: todo[] =
    data?.filter((v: todo) => v.isCompleted === false) || [];
  const doneList: todo[] = data?.filter(
    (v: todo) => v.isCompleted === true || []
  );
  return (
    <div className="w-[1200px] h-[100vh] px-48">
      <Search />
      <div className="pt-4 flex gap-2">
        <TodoList todoList={todoList} />
        <DoneList doneList={doneList} />
      </div>
    </div>
  );
}
