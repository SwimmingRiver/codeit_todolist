import axiosInstance from "./axiosInstance";

const createTodo = async (data: string) => {
  try {
    const res = await axiosInstance.post("/items", { name: data });
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export default createTodo;
