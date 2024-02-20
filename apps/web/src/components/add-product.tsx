'use client';

import { styles, Button } from '@burger/components';

export default function AddProduct({
  addProduct,
  id,
}: {
  addProduct: (formData: FormData) => Promise<void>;
  id: string;
}): JSX.Element {
  const handleSubmit = async function (
    formEvent: React.FormEvent<HTMLFormElement>,
  ) {
    formEvent.preventDefault();
    const formData = new FormData();
    formData.set('product', id);
    await addProduct(formData);
    window.dispatchEvent(new CustomEvent('cart', {}));
  };

  return (
    <form
      className={styles.cardFormClass}
      onSubmit={handleSubmit}
      action={addProduct}
    >
      <input readOnly type="text" name="product" value={id} />
      <Button>Add to Order</Button>
    </form>
  );
}
