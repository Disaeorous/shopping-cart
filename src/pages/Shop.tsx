import goodsItems from '../data/products.json';
import styles from '../styles/pages/shop.module.scss';

import { ProductItem, ProductList } from '../components/Product';

export const Shop = () => {
  const { shop, shopTitle } = styles;
  return (
    <section className={shop}>
      <h1 className={shopTitle}>Products</h1>

      <ProductList data={goodsItems} />
    </section>
  );
};
