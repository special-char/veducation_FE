const { default: axiosInstance } = require("./axiosInstance");

export const getAboutData = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/graphql`,{
        method: 'POST',
        body: JSON.stringify({
          query: `{
            courses{
             data{
               attributes{
                 lesson{
                   id
                   title
                   description
                   thumbnail
                   link
                 }
               }
             }
           }
           }`,
        }),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      );
    // setList(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
