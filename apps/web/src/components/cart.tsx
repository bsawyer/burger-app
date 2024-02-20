import { cookies } from 'next/headers';
import { getProducts, type Product } from '../lib/fetchers';
import { remove } from '../lib/actions';
import RemoveProduct from './remove-product';
import { styles } from '@burger/components';
import Image from 'next/image';
import { toPrice } from '../lib/formatters';

interface ProductCounted extends Product {
  count: number;
}

export default async function Page(): Promise<JSX.Element> {
  const cookieStore = cookies(); // dynamically rendered atm
  const cookie = cookieStore.get('cart');
  const data = await getProducts();

  const cart = cookie?.value.split('-') || [];
  const inCartCount: { [P in string]: number } = {};
  const cartMap: { [P in string]: ProductCounted } = {};

  if (cart.length > 1) {
    for (let i = 0; i < cart.length; i += 2) {
      inCartCount[cart[i]] = parseInt(cart[i + 1]) || 0;
    }
  }

  data.products?.forEach((product) => {
    if (Object.hasOwn(inCartCount, product.id)) {
      cartMap[product.id] = {
        count: inCartCount[product.id],
        ...product,
      };
    }
  });

  const inCart = Object.values(cartMap);

  return (
    <>
      {inCart.length
        ? inCart.map(({ id, name, count, image, description, price }, i) => (
            <div key={i} className={styles.cartItemClass}>
              <div className={styles.cartItemInfoClass}>
                <div className={styles.cartItemImageContainerClass}>
                  <Image
                    alt={description}
                    src={image}
                    sizes="100px"
                    fill
                    style={{
                      objectFit: 'cover',
                    }}
                  />
                </div>
                {name} ({count})
              </div>
              <div className={styles.cartItemInfoClass}>
                {toPrice(count * price)}
                <div className={styles.cartFormClass}>
                  <RemoveProduct id={id} removeProduct={remove} />
                </div>
              </div>
            </div>
          ))
        : 'Your cart is empty'}
    </>
  );
}
