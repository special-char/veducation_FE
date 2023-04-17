const { default: axiosInstance } = require("./axiosInstance");

export const getAboutData = async () => {
  try {
    const response = await axiosInstance.get("/about-page?populate=deep");
    // setList(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
