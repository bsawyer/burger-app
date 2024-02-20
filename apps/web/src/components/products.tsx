import Link from 'next/link';
import { getProducts } from '../lib/fetchers';
import { Grid, Card } from '@burger/components';
import CardAnimation from './card-animation';
import Product from './product';

export default async function Products(): Promise<JSX.Element> {
  const data = await getProducts();

  return (
    <Grid>
      {data.products?.length
        ? data.products.map((product, i) => (
            <Link key={i} href={`/menu/${product.slug}`}>
              <Card>
                <Product product={product} />
                <CardAnimation href={`/menu/${product.slug}`} />
              </Card>
            </Link>
          ))
        : null}
    </Grid>
  );
}
