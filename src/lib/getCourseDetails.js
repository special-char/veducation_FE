const { default: axiosInstance } = require("./axiosInstance");

export const getCourseDetails = async (id) => {
  try {
    const response = await axiosInstance.get(`/courses/${id}?&populate[img]=*&populate[lesson][populate][0]=thumbnail&populate[lesson][populate][1]=video`);
    // console.log("/courses/${id}?populate=*");
    // setList(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
