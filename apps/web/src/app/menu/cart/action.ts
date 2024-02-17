'use server';

import { cookies } from 'next/headers';

export async function remove(formData: FormData): Promise<void> {
  const cookieStore = cookies();
  const cookie = cookieStore.get('cart');
  const id = formData.get('product');
  if (cookie?.value) {
    const cart = cookie.value.split(',');
    for (let i = 0; i < cart.length; i += 2) {
      if (cart[i] === id) {
        cart.splice(i, 2);
        break;
      }
    }
    if (cart.length) {
      cookies().set('cart', cart.join(','));
    } else {
      cookies().delete('cart');
    }
  }
}
