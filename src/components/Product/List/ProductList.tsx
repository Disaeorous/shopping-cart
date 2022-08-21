import React from 'react';
import { ProductItemProps, ProductListProps } from '../../../common/interfaces';

import { ProductItem } from '../Item';

export const ProductList: React.FC<ProductListProps> = ({ data }) => {
  const productData = data as [];

  console.log(productData);

  return (
    <>
      {productData.map((product: ProductItemProps) => {
        return (
          <React.Fragment key={product.id}>
            <ProductItem {...product} />
          </React.Fragment>
        );
      })}
    </>
  );
};
