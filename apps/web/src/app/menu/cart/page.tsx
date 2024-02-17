import { cookies } from 'next/headers';
import { remove } from './action';
import { getProducts, type Product } from '../../../lib/fetchers';

export default async function Page(): Promise<JSX.Element> {
  const cookieStore = cookies();
  const cookie = cookieStore.get('cart');
  const data = await getProducts();

  const cart = cookie?.value.split(',') || [];
  const cartMap: { [P in string]: Product } = {};

  if (cart.length > 1) {
    // weird cookie state removing last item
    for (let i = 0; i < cart.length; i += 2) {
      cartMap[cart[i]] = { count: parseInt(cart[i + 1]) } as Product;
    }
  }

  data.products?.forEach((product) => {
    if (Object.hasOwn(cartMap, product.id)) {
      cartMap[product.id] = {
        ...cartMap[product.id],
        ...product,
      };
    }
  });

  const inCart = Object.values(cartMap);

  return (
    <>
      <h1>cart</h1>
      {inCart.length
        ? inCart.map(({ id, name, count }, i) => (
            // eslint-disable-next-line @typescript-eslint/no-misused-promises -- :(
            <form key={i} action={remove}>
              <input readOnly type="text" name="product" value={id || ''} />
              <div>
                {name}({count})
              </div>
              <button type="submit">remove</button>
            </form>
          ))
        : null}
    </>
  );
}
