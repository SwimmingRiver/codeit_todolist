import axiosInstance from "./axiosInstance";

const removeTodo = async (id: string) => {
  try {
    const res = await axiosInstance.delete(`/items/${id}`);
    return res.status;
  } catch (error) {
    console.error(error);
  }
};
export default removeTodo;
