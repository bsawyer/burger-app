import type { Metadata } from 'next';
import { styles, Logo } from '@burger/components';
import Link from 'next/link';
import Nav from '../components/nav';

export const metadata: Metadata = {
  title: 'Burger',
  description: 'Burger SEO',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html
      lang="en"
      className={`${styles.lightThemeClass} ${styles.darkThemeClass}  ${styles.defaultThemeClass}`}
    >
      <body>
        <header className={styles.headerClass}>
          <Link className={styles.linkClass} href="/">
            <Logo />
          </Link>
          <Nav />
        </header>
        {children}
      </body>
    </html>
  );
}
