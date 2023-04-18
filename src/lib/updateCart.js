import axiosInstance from "./axiosInstance";

export const getCartItems = async (id) => {
  try {
    const response = await axiosInstance.get(
      `carts?populate=deep&filters[isRemoved][$ne]=true&filters[isPurchased][$ne]=true&filters[user_id][id][$eq]=${id}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const addToCart = async (productID, userId, items = 0) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/carts?populate=deep`,
      {
        method: "POST",
        body: JSON.stringify({
          data: {
            product: `${productID}`,
            user_id: `${userId}`,
            quantity: items,
            isRemoved: items === 0 ? true : false,
          },
        }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
};

export const updateCart = async (cartId, payload) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/carts/${cartId}`,
      {
        method: "PUT",
        body: JSON.stringify({
          data: payload,
        }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};
