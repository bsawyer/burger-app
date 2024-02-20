import { Card, styles, Button, BackIcon } from '@burger/components';
import Link from 'next/link';
import { Suspense } from 'react';
import Cart from '../../../components/cart';

export default async function Page(): Promise<JSX.Element> {
  return (
    <Card variant="active">
      <div className={styles.cardContentClass}>
        <div className={`${styles.cardBottomClass} ${styles.cartClass}`}>
          <Link href="/menu" scroll={false} className={styles.backLinkClass}>
            <Button type="button" variant="icon">
              <BackIcon />
            </Button>
          </Link>
          <h1>Shopping Cart</h1>
          <Suspense fallback={<>Loading...</>}>
            <Cart />
          </Suspense>
        </div>
      </div>
    </Card>
  );
}
