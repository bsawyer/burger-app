import { Button } from '@burger/components';
import Link from 'next/link';

export default function Page(): JSX.Element {
  return (
    <main>
      home
      <Button>hi</Button>
      <Link href="/menu">menu</Link>
    </main>
  );
}
