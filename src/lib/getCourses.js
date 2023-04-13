const { default: axiosInstance } = require("./axiosInstance");

export const getCourses = async (setList) => {
  try {
    const response = await axiosInstance.get("/courses?populate=deep");
    // setList(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
