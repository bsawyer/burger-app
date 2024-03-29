'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { styles, CartIcon } from '@burger/components';
import { useCookie } from '../lib/hooks';
import { toTotal } from '../lib/formatters';
import { Button } from '@burger/components';
import { useEffect } from 'react';

export default function Nav(): JSX.Element {
  const pathname = usePathname();
  const [cart, setCart] = useCookie('cart');
  const total = toTotal(cart);

  useEffect(() => {
    window.addEventListener('empty-cart', () => {
      setCart('');
    });
  }, []);

  return (
    <nav>
      {pathname.includes('menu') ? (
        <Link
          className={`${styles.linkClass} ${styles.cartIconClass}`}
          href={`/menu/cart`}
        >
          <Button variant="icon">
            <CartIcon />
          </Button>
          <div
            className={`${styles.totalClass} ${total !== '0' ? styles.totalActiveClass : ''}`}
          >
            {total !== '0' ? total : null}
          </div>
        </Link>
      ) : (
        <Link className={styles.linkClass} href={`/menu`}>
          Menu
        </Link>
      )}
    </nav>
  );
}
