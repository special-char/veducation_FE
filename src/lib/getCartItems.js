import axiosInstance from "./axiosInstance";

export const getCartItems = async () => {
  try {
    const response = await axiosInstance.get("carts?populate=*");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
