const { default: axiosInstance } = require("./axiosInstance");

export const getCourseDetails = async (id) => {
  try {
    const response = await axiosInstance.get(`/courses/${id}?populate=deep`);
    // setList(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
