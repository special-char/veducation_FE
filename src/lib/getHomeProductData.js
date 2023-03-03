const { default: axiosInstance } = require("./axiosInstance");

export const getCategoryData = async (id) => {
  try {
    const response = await axiosInstance.get(
      id ? `categories/${id}?populate=*` : "categories?populate=*"
    );
    // const response = await axiosInstance.get("categories/1?populate=*");&filters[user_id][id][$eq]=7&filters[product][id][$eq]=9
    // setList(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getProductData = async (id, userId) => {
  try {
    const response = await axiosInstance.get(
      id ? `/all-products/${id}?populate=*` : `/all-products?populate=*`
    );
    // const response = await axiosInstance.get("categories/1?populate=*");&filters[user_id][id][$eq]=7
    // setList(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
