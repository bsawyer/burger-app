'use client';

import { useRef, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { styles } from '@burger/components';

export default function CardAnimation({ href }: { href: string }): JSX.Element {
  const ref = useRef<HTMLInputElement>(null);
  const cardRef = useRef<HTMLElement | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== href) {
      requestAnimationFrame(() => {
        cardRef.current?.remove();
        cardRef.current = null;
      });
    }
    return () => {
      // anonymous arrow for gc
      requestAnimationFrame(() => {
        cardRef.current?.remove();
        cardRef.current = null;
      });
    };
  }, [pathname]);

  const handleClick = (evt: React.MouseEvent<HTMLElement>) => {
    evt.preventDefault();

    if (ref.current) {
      const card = ref.current.parentNode as HTMLElement;
      const bounds = card.getClientRects()[0];
      const right = window.innerWidth - bounds.left - card.clientWidth;
      const bottom = window.innerHeight - bounds.top - card.clientHeight;

      const clone = card.cloneNode(true) as HTMLElement;
      clone.classList.add(styles.cardActiveClass);
      clone.setAttribute(
        'style',
        `left: ${bounds.left}px;
        top:${bounds.top}px;
        right:${right}px;
        bottom:${bottom}px;
        transform:translateX(0)`,
      );

      clone.addEventListener('transitionend', () => {
        router.push(href, { scroll: false });
      });

      cardRef.current = clone;
      document.body.prepend(clone);
      requestAnimationFrame(() => {
        clone.removeAttribute('style');
      });
    }
  };

  return (
    <div //eslint-disable-line -- progressive enhancement
      className={styles.cardCoverClass}
      ref={ref}
      onClick={handleClick}
    ></div>
  );
}
