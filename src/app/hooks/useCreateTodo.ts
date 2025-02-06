"use client";
import { useMutation } from "@tanstack/react-query";
import { createTodo } from "../api";

const useCreateTodo = () => {
  return useMutation({
    mutationFn: async (data: string) => {
      await createTodo(data);
    },
  });
};

export default useCreateTodo;
