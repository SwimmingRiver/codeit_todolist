"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTodo } from "../api";

const useCreateTodo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: string) => {
      await createTodo(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
};

export default useCreateTodo;
