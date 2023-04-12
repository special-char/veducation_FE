const { default: axiosInstance } = require("./axiosInstance");

export const getCategoryData = async (id) => {
  try {
    const response = await axiosInstance.get(
      id ? `/categories/${id}?populate=deep` : "/categories?populate=*"
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

export const updateProduct = async (id, payload) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/all-products/${id}?populate=*`,
      {
        method: "PUT",
        body: JSON.stringify({
          data: payload,
        }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    return response.json();
  } catch (error) {
    console.error(error);
  }
};
