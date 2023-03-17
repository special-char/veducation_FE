import axiosInstance from "./axiosInstance";

export const getPromoCode = async () => {
  try {
    const response = await axiosInstance.get("/promocodes");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
