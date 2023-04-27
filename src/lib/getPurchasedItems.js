import axiosInstance from "./axiosInstance";

export const getPuchasedItems = async (id) => {
  try {
    const response = await axiosInstance.get(
      `carts?populate[user_id]=*&populate[purchase]=*&populate[product][populate][0]=posterImageUrl&filters[isPurchased][$eq]=true&filters[isRemoved][$eq]=false&filters[user_id][id][$eq]=${id}`
      // `carts?populate=*&filters[isRemoved][$ne]=true&filters[isPurchased][$ne]=false&filters[user_id][id][$eq]=${id}`
    );
    // const response = await fetch(
    //   `${process.env.NEXT_PUBLIC_API_URL}/api/carts?populate=*&filters[isRemoved][$ne]=true&filters[isPurchased][$ne]=false&filters[user_id][id][$eq]=${id}`,
    //   {
    //     method: "GET",
    //   }
    // );
    // console.log({ responsedeep: response?.data }, id);
    return response.data;
  } catch (error) {
    console.log(error.message, "deep error");
  }
};
