import axiosInstance from "./axiosInstance";

export const addToCart = async (id, userId, items = 0) => {
  try {
    // const response = await axiosInstance.post("/carts", {
    //   data: {
    //     productId: `${id}`,
    //     userId: `${userId}`,
    //     noOfItems: items,
    //   },
    // });
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/carts`, {
      method: "POST",
      body: JSON.stringify({
        data: {
          productId: `${id}`,
          userId: `${userId}`,
          noOfItems: items,
        },
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    alert("json.message");
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
};

export const addItem = async (id, count) => {};
export const removeItem = async (id, count) => {};
