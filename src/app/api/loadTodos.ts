import axiosInstance from "./axiosInstance";

const loadTodos = async () => {
  try {
    const res = await axiosInstance.get("/items");
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default loadTodos;
