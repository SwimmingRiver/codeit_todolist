import axiosInstance from "./axiosInstance";

const createImageUrl = async (data: FormData) => {
  try {
    const res = await axiosInstance.post("/images/upload", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export default createImageUrl;
