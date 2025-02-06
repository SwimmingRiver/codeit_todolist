"use client";
import { todo } from "./\btypes";
import { Search } from "./components/Inputs";
import { DoneList, TodoList } from "./components/List";
import { useLoadTodos } from "./hooks";

export default function Home() {
  const { data } = useLoadTodos();
  const todoList: todo[] =
    data?.filter((v: any) => v.isCompleted === false) || [];

  return (
    <div>
      <Search />
      <div>
        <TodoList todoList={todoList} />
        <DoneList />
      </div>
    </div>
  );
}
