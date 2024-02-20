export function toPrice(
  value: number,
  locale = 'en-US',
  offset = 0.01,
): string {
  return (value * offset).toLocaleString(locale, {
    style: 'currency',
    currency: 'USD',
  });
}

export function toTotal(cookie: string): string {
  const cart = cookie.split('-');
  let total = 0;
  if (cart.length > 1) {
    for (let i = 0; i < cart.length; i += 2) {
      total += parseInt(cart[i + 1]);
    }
  }
  return String(Math.min(total, 99));
}
