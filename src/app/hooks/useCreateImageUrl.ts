import { useMutation } from "@tanstack/react-query";
import { createImageUrl } from "../api";

const useCreateImageUrl = () => {
  return useMutation({ mutationFn: (data: FormData) => createImageUrl(data) });
};

export default useCreateImageUrl;
