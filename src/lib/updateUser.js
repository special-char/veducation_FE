export const updateUser = async (id, form) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/user-edits/${id}`,
      {
        method: "PUT",
        body: JSON.stringify({ data: form }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    return response.json();
  } catch (error) {
    console.log(error);
  }
};
