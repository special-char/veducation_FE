import axiosInstance from "./axiosInstance";

export const getRating = async (id, userid) => {
  try {
    const response = await axiosInstance.get(
      id ? `/ratings/${id}?populate=*` : "/ratings?populate=*"
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
export const getAllRatings = async (userid) => {
  try {
    const response = await axiosInstance.get(
      `/ratings?populate=*&filters[user_id][id][$eq]=${userid}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const addRatings = async (
  payload = { user_id, rating, course, product, book }
) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/ratings?populate=*`,
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
    return response.json();
  } catch (error) {
    console.error(error);
  }
};

export const updateRating = async (
  payload = { user_id, rating, course, product, book },
  ratingId
) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/ratings/${ratingId}`,
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
    return response.json();
  } catch (error) {
    console.error(error);
  }
};
