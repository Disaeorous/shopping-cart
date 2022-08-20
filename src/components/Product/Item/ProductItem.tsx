export const ProductItem = ({ id, name, price, imgURL }: any) => {
  // const { id, name, price, imgURL } = item;

  return (
    <div style={{ display: 'flex', gap: '2rem' }}>
      <p>{id}</p>
      <p>{name}</p>
      <p>{price}</p>
      <img style={{ width: '7.5rem', height: '7.5rem' }} src={imgURL} alt={name} />
    </div>
  );
};
