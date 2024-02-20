import { styles, Button } from '@burger/components';
import Image from 'next/image';
import Link from 'next/link';

export default function Page(): JSX.Element {
  return (
    <main className={styles.bentoBoxClass}>
      <div style={{ position: 'relative', aspectRatio: '1/1' }}>
        <Image
          alt="Burger alt text"
          src="https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6"
          sizes="500px"
          fill
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
      <div className={styles.featuredClass}>
        <h2 style={{ margin: 0 }}>Try our classic</h2>
        <p>
          A classic beef patty topped with lettuce, tomato, and our special
          sauce, served in a sesame seed bun.
        </p>
        <Link href="/menu">
          <Button type="button" variant="secondary">
            Order now
          </Button>
        </Link>
      </div>
    </main>
  );
}
