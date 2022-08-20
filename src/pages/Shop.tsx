import goodsItems from '../data/items.json';
import { ProductItem, ProductList } from '../components/Product';

export const Shop = () => {
  return (
    <div>
      <h1 style={{ border: '1px solid var(--gray-border)', marginTop: '6.1rem' }}>
        Products
      </h1>
      {/* <ProductList /> */}

      <div>
        {goodsItems.map((product): any => {
          return (
            <div key={product.id} style={{ display: 'flex', gap: '2rem' }}>
              <p>{product.id}</p>
              <p>{product.name}</p>
              <p>{product.price}</p>
              <img
                style={{ width: '7.5rem', height: '7.5rem' }}
                src={product.imgURL}
                alt={product.name}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
