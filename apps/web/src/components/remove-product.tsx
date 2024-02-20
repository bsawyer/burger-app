'use client';

import { styles, Button, RemoveIcon } from '@burger/components';

export default function RemoveProduct({
  removeProduct,
  id,
}: {
  removeProduct: (formData: FormData) => Promise<void>;
  id: string;
}): JSX.Element {
  const handleSubmit = async function (
    formEvent: React.FormEvent<HTMLFormElement>,
  ) {
    formEvent.preventDefault();
    const formData = new FormData();
    formData.set('product', id);
    await removeProduct(formData);
    window.dispatchEvent(new CustomEvent('cart', {}));
  };

  return (
    <form
      className={styles.cardFormClass}
      onSubmit={handleSubmit}
      action={removeProduct}
    >
      <input readOnly type="text" name="product" value={id} />
      <Button variant="iconAlt">
        <RemoveIcon />
      </Button>
    </form>
  );
}
