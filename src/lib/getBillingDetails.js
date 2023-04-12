import axiosInstance from "./axiosInstance";

export const getBillingDetails = async () => {
  try {
    const response = await axiosInstance.get("/shipping-details?populate=*");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const addBillingDetails = async (form) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/shipping-details`,
      {
        method: "POST",
        body: JSON.stringify({
          data: form,
        }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    return response.json();
  } catch (error) {
    console.log(error);
  }
};
