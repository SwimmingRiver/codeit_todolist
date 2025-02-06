import { useMutation } from "@tanstack/react-query";
import { todo } from "../\btypes";
import { editTodo } from "../api";

const useEditTodo = (id: string) => {
  return useMutation({
    mutationFn: (data: todo) => editTodo(id, data),
  });
};
export default useEditTodo;
