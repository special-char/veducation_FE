export const currentDate = () => new Date();

export function calculatePrice(
  cartItems,
  rate = 1.07,
  promocode = { rate: "", amount: null }
) {
  if (isNaN(rate)) rate = 1.07;
  console.log({ rate });
  const t = cartItems?.reduce((p, c) => {
    return (
      p +
      c?.attributes?.product?.data?.attributes?.price * c.attributes.quantity
    );
  }, 0);
  const withTax =
    (t * rate).toFixed(2) - (promocode.amount && promocode.amount) || 0;

  return {
    total: t,
    withTax,
  };
}
