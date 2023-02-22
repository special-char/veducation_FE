import axiosInstance from "./axiosInstance";

export const getAboutData = async () => {
  try {
    const respose = await axiosInstance.get("/about-page");
    return respose.data;
  } catch (error) {
    console.log(error);
  }
};
