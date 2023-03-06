import axiosInstance from "./axiosInstance";

export const getCartItems = async (id) => {
  try {
    const response = await axiosInstance.get(
      `carts?populate=*&filters[isRemoved][$ne]=true&filters[user_id][id][$eq]=${id}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
