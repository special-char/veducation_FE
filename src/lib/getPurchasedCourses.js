import axiosInstance from "./axiosInstance";

export const getPurchasedCourses = async (id) => {
  try {
    const response = await axiosInstance.get(
      `courses?populate=*&filters[user_id][id][$eq]=${id}`
    );
    // console.log({ baughtCourses: response?.data });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
