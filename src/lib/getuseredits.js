import axiosInstance from "./axiosInstance";

export const getUseredits = async () => {
  try {
    const response = await axiosInstance.get("/user-edits?populate=*");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
