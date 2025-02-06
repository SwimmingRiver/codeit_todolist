import { todo } from "../\btypes";
import axiosInstance from "./axiosInstance";

const editTodo = async (id: string, data: todo) => {
  try {
    const res = await axiosInstance.patch(`/items/${id}`, data);
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export default editTodo;
