import axiosInstance from "./axiosInstance";

export const getGoogleSignInRequest = async (token) => {
  try {
    const response = await axiosInstance.get(`auth/google/callback?${token}`);
    localStorage.setItem("TOKEN", response.data.jwt);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
