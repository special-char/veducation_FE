export const updateCourse = async (id, payload) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/courses/${id}?populate=*`,
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

export const purchaseCourse = async (id, payload) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/purchases?populate=*`,
      {
        method: "POST",
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
