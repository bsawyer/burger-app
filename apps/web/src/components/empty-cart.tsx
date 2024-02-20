'use client';
import { useEffect } from 'react';
export default function EmptyCart() {
  useEffect(() => {
    // safari bug fix -- https://stackoverflow.com/questions/77997310/having-issues-clearing-cookies-in-safari-via-nextjs
    window.dispatchEvent(new CustomEvent('empty-cart', {}));
  }, []);
  return <>Your cart is empty</>;
}
