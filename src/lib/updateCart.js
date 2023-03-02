import axiosInstance from "./axiosInstance";

export const addToCart = async (productID, userId, items = 0, cartId) => {
  try {
    if (!cartId) {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/carts`, {
        method: "POST",
        body: JSON.stringify({
          data: {
            product: `${productID}`,
            user_id: `${userId}`,
            quantity: items,
          },
        }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const json = await response.json();
      return json;
    } else {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/carts/${cartId}`,
        {
          method: "PUT",
          body: JSON.stringify({
            data: {
              product: `${productID}`,
              user_id: `${userId}`,
              quantity: items,
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
    }
  } catch (error) {
    console.log(error);
  }
};

export const addItem = async (id, count) => {};
export const removeItem = async (id, count) => {};
