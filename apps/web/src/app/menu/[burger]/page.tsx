import { add } from '../../../lib/actions';
import { getProducts } from '../../../lib/fetchers';
import { Card, Button, styles, BackIcon } from '@burger/components';
import Product from '../../../components/product';
import Link from 'next/link';
import AddProduct from '../../../components/add-product';

export default async function Page({
  params,
}: {
  params: { burger: string };
}): Promise<JSX.Element> {
  const data = await getProducts();
  const product = data.products?.find((p) => p.slug === params.burger);

  return (
    <>
      {product ? (
        <Card variant="active">
          <Product product={product}>
            <Link href="/menu" scroll={false} className={styles.backLinkClass}>
              <Button type="button" variant="icon">
                <BackIcon />
              </Button>
            </Link>
            <AddProduct addProduct={add} id={product.id} />
          </Product>
        </Card>
      ) : null}
    </>
  );
}
