'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const delimiter = '-';

export async function add(formData: FormData): Promise<void> {
  const cookieStore = cookies();
  const cookie = cookieStore.get('cart');
  const id = String(formData.get('product') || '');
  if (id === '') {
    throw new Error('add action failed, missing product id');
  }
  let cart: string[] = [];
  let i = 0;
  if (cookie?.value) {
    cart = cookie.value.split(delimiter);

    for (i = 0; i < cart.length; i += 2) {
      if (cart[i] === id) {
        break;
      }
    }
  }
  if (cart[i]) {
    cart[i + 1] = String(parseInt(cart[i + 1]) + 1);
  } else if (id) {
    cart = cart.concat([id, '1']);
  }
  cookies().set('cart', cart.join(delimiter));
}

export async function remove(formData: FormData): Promise<void> {
  const cookieStore = cookies();
  const cookie = cookieStore.get('cart');
  const id = formData.get('product');
  if (cookie?.value) {
    const cart = cookie.value.split(delimiter);
    for (let i = 0; i < cart.length; i += 2) {
      if (cart[i] === id) {
        cart.splice(i, 2);
        break;
      }
    }
    if (cart.length > 1) {
      cookies().set('cart', cart.join(delimiter));
    } else {
      cookies().delete('cart');
    }
  } else {
    cookies().delete('cart');
  }
  try {
    redirect('/menu/cart');
  } catch (e) {
    //
  }
}

export async function updateQuantity(formData: FormData) {
  const id = formData.get('product');
  const method = formData.get('method');
  const cookieStore = cookies();
  const cookie = cookieStore.get('cart');

  if (cookie?.value) {
    const cart = cookie.value.split(delimiter);
    for (let i = 0; i < cart.length; i += 2) {
      if (cart[i] === id) {
        if (method === 'add') {
          cart[i + 1] = String(parseInt(cart[i + 1]) + 1);
        } else {
          if (cart[i + 1] === '1') {
            cart.splice(i, 2);
          } else {
            cart[i + 1] = String(parseInt(cart[i + 1]) - 1);
          }
        }
        break;
      }
    }

    if (cart.length > 1) {
      cookies().set('cart', cart.join(delimiter));
    } else {
      cookies().delete('cart');
    }
  }
}
