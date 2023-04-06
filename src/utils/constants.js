export const currentDate = () => new Date();

export function calculatePrice(
  cartItems,
  rate = 1.07,
  promocode = { rate: "", amount: null }
) {
  if (isNaN(rate)) rate = 1.07;
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

const formatter = new Intl.RelativeTimeFormat("en");
const DIVISIONS = [
  { amount: 60, name: "seconds" },
  { amount: 60, name: "minutes" },
  { amount: 24, name: "hours" },
  { amount: 7, name: "days" },
  { amount: 4.34524, name: "weeks" },
  { amount: 12, name: "months" },
  { amount: Number.POSITIVE_INFINITY, name: "years" },
];

export const dateFormat = Intl.DateTimeFormat("en-UK", {
  dateStyle: "long",
  formatMatcher: "basic",
});

export function formatTimeAgo(date) {
  let duration = (date - new Date()) / 1000;
  for (let i = 0; i < DIVISIONS.length; i++) {
    const division = DIVISIONS[i];
    if (Math.abs(duration) < division.amount) {
      return formatter.format(Math.round(duration), division.name);
    }
    duration /= division.amount;
  }
}

export const baseUrl = process.env.NEXT_PUBLIC_API_URL;
