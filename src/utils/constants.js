export const currentDate = () => new Date();

export function calculatePrice(cartItems, rate = 1.07) {
  const t = cartItems?.reduce((p, c) => {
    return (
      p +
      c?.attributes?.product?.data?.attributes?.price * c.attributes.quantity
    );
  }, 0);
  return { total: t, withTax: (t * rate).toFixed(2) };
}
