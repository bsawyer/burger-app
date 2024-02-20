import Products from '../../components/products';

export default async function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}): Promise<JSX.Element> {
  return (
    <main>
      <Products />
      {children}
    </main>
  );
}
