import goodsItems from '../../../data/items.json';
import { ProductItem } from '../Item';

export const ProductList = () => {
  return (
    <>
      {goodsItems.map(({ product }: any) => {
        <div key={product.id}>
          <ProductItem
            id={product.id}
            name={product.name}
            price={product.price}
            imgURL={product.imgURL}
          />
          ;
        </div>;
      })}
    </>
  );
};
