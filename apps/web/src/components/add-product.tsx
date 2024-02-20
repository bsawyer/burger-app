'use client';

import { styles, Button, Toast } from '@burger/components';
import { useState, useRef, useEffect } from 'react';
import type { Product } from '../lib/fetchers';

export default function AddProduct({
  addProduct,
  product,
}: {
  addProduct: (formData: FormData) => Promise<void>;
  product: Product;
}): JSX.Element {
  const [isActive, setActive] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const handleSubmit = async function (
    formEvent: React.FormEvent<HTMLFormElement>,
  ) {
    formEvent.preventDefault();
    const formData = new FormData();
    formData.set('product', product.id);
    await addProduct(formData);
    window.dispatchEvent(new CustomEvent('cart', {}));
    setActive(true);
  };

  useEffect(() => {
    ref.current?.addEventListener('animationend', () => {
      setActive(false);
    });
  }, []);

  return (
    <form
      className={styles.cardFormClass}
      onSubmit={handleSubmit}
      action={addProduct}
    >
      <input readOnly type="text" name="product" value={product.id} />
      <Button>Add to Order</Button>
      <Toast divRef={ref} active={isActive}>
        Added &quot;{product.name}&quot; (1) to order
      </Toast>
    </form>
  );
}
