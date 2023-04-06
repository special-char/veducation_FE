import axiosInstance from "./axiosInstance";

export const getUser = async (field) => {
  try {
    const response = await axiosInstance.get("/users?populate=*");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
