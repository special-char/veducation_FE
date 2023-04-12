export const updatePassword = async (
  form = {
    password: "string",
    currentPassword: "string",
    passwordConfirmation: "string",
  },
  token
) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/auth/change-password`,
      {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // if(response.json().data.attributes.){}

    return response.json();
  } catch (error) {
    console.log(error);
  }
};
