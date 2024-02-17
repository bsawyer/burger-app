import { cookies } from 'next/headers';
import { getProducts } from '../../../lib/fetchers';

export default async function Page({
  params,
}: {
  params: { burger: string };
}): Promise<JSX.Element> {
  const data = await getProducts();
  const product = data.products?.find((p) => p.slug === params.burger);

  async function add(): Promise<void> {
    'use server';
    const cookieStore = cookies();
    const cookie = cookieStore.get('cart');
    let cart: string[] = [];
    const id = product?.id;
    let i = 0;
    if (cookie?.value) {
      cart = cookie.value.split(',');

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
    cookies().set('cart', cart.join(','));
  }

  return (
    <>
      {product ? (
        // eslint-disable-next-line @typescript-eslint/no-misused-promises -- :(
        <form action={add}>
          <h1>burger {params.burger}</h1>
          <button type="submit">add</button>
        </form>
      ) : null}
    </>
  );
}
