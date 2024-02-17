import Link from 'next/link';
import Image from 'next/image';
import { getProducts } from '../../lib/fetchers';

export default async function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}): Promise<JSX.Element> {
  const data = await getProducts();

  return (
    <section>
      <Link href="/">home</Link>
      <Link href={`/menu/cart`}>cart</Link>
      {data.products?.length
        ? data.products.map((d, i) => (
            <Link key={i} href={`/menu/${d.slug}`}>
              burger {d.name}
              <Image
                alt={d.description}
                src={d.image}
                width={400}
                height={400}
              />
            </Link>
          ))
        : null}
      {children}
    </section>
  );
}
