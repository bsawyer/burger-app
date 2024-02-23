'use client';

import { styles, Button, PlusIcon, MinusIcon } from '@burger/components';

export default function Quantity({
  updateQuantity,
  id,
}: {
  updateQuantity: (formData: FormData) => Promise<void>;
  id: string;
}): JSX.Element {
  const handleSubmit = async function (
    formEvent: React.FormEvent<HTMLFormElement>,
  ) {
    formEvent.preventDefault();
    const formData = new FormData();
    formData.set('product', id);
    formData.set(
      'method',
      formEvent.currentTarget.textContent === 'add one' ? 'add' : 'subtract',
    );
    await updateQuantity(formData);
    window.dispatchEvent(new CustomEvent('cart', {}));
  };

  return (
    <>
      <form
        className={styles.cartFormClass}
        onSubmit={handleSubmit}
        action={updateQuantity}
      >
        <input readOnly type="text" name="product" value={id} />
        <input readOnly type="text" name="method" value="subtract" />
        <Button variant="icon">
          <span hidden>remove one</span>
          <MinusIcon />
        </Button>
      </form>
      <form
        className={styles.cartFormClass}
        onSubmit={handleSubmit}
        action={updateQuantity}
      >
        <input readOnly type="text" name="product" value={id} />
        <input readOnly type="text" name="method" value="add" />
        <Button variant="icon">
          <span hidden>add one</span>
          <PlusIcon />
        </Button>
      </form>
    </>
  );
}
