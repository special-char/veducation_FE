export const updateEditUser = async (id, form) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/user-edits/${id}?populate=*`,
      {
        method: "PUT",
        body: JSON.stringify({ data: form }),
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
