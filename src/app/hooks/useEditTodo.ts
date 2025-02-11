import { useMutation, useQueryClient } from "@tanstack/react-query";
import { todo } from "../\btypes";
import { editTodo } from "../api";

const useEditTodo = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: todo) => editTodo(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      window.location.href = "/";
    },
  });
};
export default useEditTodo;
