export const addUser = async (form) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/user-edits`,
      {
        method: "POST",
        body: JSON.stringify({
          data: {
            users_permissions_user: form,
          },
        }),
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
