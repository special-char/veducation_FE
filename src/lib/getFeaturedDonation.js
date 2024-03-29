const { default: axiosInstance } = require("./axiosInstance");

export const getFeatureDonations = async () => {
  try {
    const response = await axiosInstance.get("/featuredonation?populate=deep");
    // setList(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
