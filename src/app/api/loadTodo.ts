import axiosInstance from "./axiosInstance";

const loadTodo = async (data: string) => {
  try {
    const res = await axiosInstance.get(`/items/${data}`);
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export default loadTodo;
