const { default: axiosInstance } = require("./axiosInstance");

export const getDonationsData = async (setList) => {
  try {
    const response = await axiosInstance.get("/donations?populate=*");
    // setList(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
