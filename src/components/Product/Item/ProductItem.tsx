import { ProductItemProps } from '../../../common/interfaces';

export const ProductItem: React.FC<ProductItemProps> = (item) => {
  const { id, name, price, imgURL } = item;

  return (
    <article style={{ display: 'flex', gap: '2rem' }}>
      <p>{id}</p>
      <p>{name}</p>
      <p>{price}</p>
      <img style={{ width: '7.5rem', height: '7.5rem' }} src={imgURL} alt={name} />
    </article>
  );
};
