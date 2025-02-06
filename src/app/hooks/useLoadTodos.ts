"use client";
import { useQuery } from "@tanstack/react-query";
import { loadTodos } from "../api";

const useLoadTodos = () => {
  return useQuery({
    queryKey: [""],
    queryFn: loadTodos,
  });
};
export default useLoadTodos;
