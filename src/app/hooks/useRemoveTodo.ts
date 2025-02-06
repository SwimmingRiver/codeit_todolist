import { useMutation } from "@tanstack/react-query";
import { removeTodo } from "../api";

const useRemoveTodo = () => {
  return useMutation({
    mutationFn: (id: string) => removeTodo(id),
  });
};
export default useRemoveTodo;
