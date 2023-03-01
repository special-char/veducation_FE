import axiosInstance from "./axiosInstance";

export const getAllBooksData = async (id) => {
  try {
    const respose = await axiosInstance.get(
      id ? `libraries/${id}?populate=*` : "/libraries?populate=*"
    );
    return respose.data;
  } catch (error) {
    console.log(error);
  }
};
