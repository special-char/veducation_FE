import axiosInstance from "./axiosInstance";

export const getSocialLinks = async () => {
  try {
    const response = await axiosInstance.get("/sociallinks");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
