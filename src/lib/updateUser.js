export const updateUser = async (id, form) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/users/${id}?populate=*`,
      {
        method: "PUT",
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    // if(response.json().data.attributes.){}

    return response.json();
  } catch (error) {
    console.log(error);
  }
};
