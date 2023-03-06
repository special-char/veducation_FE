export const getCart = async (userId) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: `{
        carts{
          data{
            attributes{
              user_id{
                data{
                  id
                }
              }
            }
          }
        }
      }`,
      }),
    });
    console.log(response.json());
    return response.json();
  } catch (error) {
    console.error(error);
  }
};
