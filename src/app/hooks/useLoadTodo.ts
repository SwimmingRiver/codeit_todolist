"use client";

import { useQuery } from "@tanstack/react-query";
import { loadTodo } from "../api";

const useLoadTodo = (id: string) => {
  return useQuery({
    queryKey: ["todo", id],
    queryFn: async () => await loadTodo(id),
  });
};
export default useLoadTodo;
