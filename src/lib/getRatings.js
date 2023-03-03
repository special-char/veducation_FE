import axiosInstance from "./axiosInstance";

export const getRating = async () => {
  try {
    const response = await axiosInstance.get("/rating");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const addRatings = async (payload) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/ratings`, {
      method: "POST",
      body: JSON.stringify({
        data: payload,
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    return response.json();
  } catch (error) {
    console.error(error);
  }
};
