import Image from 'next/image';
import { type Product as ProductType } from '../lib/fetchers';
import { styles } from '@burger/components';
import { toPrice } from '../lib/formatters';

export default async function Product({
  product,
  children,
}: {
  product: ProductType;
  children?: React.ReactNode;
}): Promise<JSX.Element> {
  return (
    <div className={styles.cardContentClass}>
      <div className={styles.cardImageContainerClass}>
        <Image
          className={styles.cardImageClass}
          alt={product.description}
          src={product.image}
          sizes="500px"
          fill
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
      <div className={styles.cardBottomClass}>
        <div className={styles.cardNameClass}>{product.name}</div>
        <div className={styles.cardDescriptionClass}>{product.description}</div>
        <div className={styles.cardPriceClass}>
          {toPrice(product.price)} - {product.calorie} cals
        </div>
        {children}
      </div>
    </div>
  );
}
