import axiosInstance from "./axiosInstance";

export const getBookById = async (id) => {
  try {
    const respose = await axiosInstance.get(`/books/${id}?populate=*`);
    return respose.data;
  } catch (error) {
    console.log(error);
  }
};
