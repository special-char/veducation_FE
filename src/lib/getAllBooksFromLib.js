import axiosInstance from "./axiosInstance";

export const getAllBooksFromLib = async (id) => {
  try {
    const respose = await axiosInstance.get(
        "/books?populate=*"
    );
    return respose.data;
  } catch (error) {
    console.log(error);
  }
};
