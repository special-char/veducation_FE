import axiosInstance from "./axiosInstance";

export const addPurchase = async (
  payload = {
    cartId: ["string or id", "string or id"],
    user: "",
  }
) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/purchases?populate=*`,
      {
        method: "POST",
        body: JSON.stringify({
          data: payload,
        }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    return response?.json();
  } catch (error) {
    console.log(error);
  }
  // try {
  //   const response = await axiosInstance.post("/purchases?populate=*", {
  //     data: payload,
  //   });
  //   return response.data;
  // } catch (error) {
  //   console.error(error);
  // }
};
