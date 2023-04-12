import axiosInstance from "./axiosInstance";

export const getPuchasedItems = async (id) => {
  try {
    const response = await axiosInstance.get(
      `/carts?populate=deep&filters[isRemoved][$ne]=true&filters[isPurchased][$ne]=false&filters[user_id][id][$eq]=${id}`
      // `carts?populate=*&filters[isRemoved][$ne]=true&filters[isPurchased][$ne]=false&filters[user_id][id][$eq]=${id}`
    );
    console.log({ response: response.data }, id);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
