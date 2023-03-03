const { default: axiosInstance } = require("./axiosInstance");

export const getAboutData = async () => {
  try {
    const response = await axiosInstance.get("/about-page");
    // setList(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
