export const authSignup = async (form) => {
  try {
    console.log({ addBillingDetails: form });
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/local/register`,
      {
        method: "POST",
        body: JSON.stringify(form),
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
