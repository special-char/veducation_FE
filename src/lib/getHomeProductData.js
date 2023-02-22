const { default: axiosInstance } = require("./axiosInstance");

export const getCategoryData = async (id) => {
  try {
    const response = await axiosInstance.get(
      id ? `categories/${id}?populate=*` : "categories?populate=*"
    );
    // const response = await axiosInstance.get("categories/1?populate=*");
    // setList(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getProductData = async (id) => {
  try {
    const response = await axiosInstance.get(
      id ? `/all-products/${id}` : "/all-products"
    );
    // const response = await axiosInstance.get("categories/1?populate=*");
    // setList(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
