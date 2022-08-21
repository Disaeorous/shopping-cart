import { ProductItemProps } from '../../../common/interfaces';
import { formatCurrency } from '../../../utils/formatCurrency';
import { useShoppingCart } from '../../../context/ShoppingCartContext';

export const ProductItem: React.FC<ProductItemProps> = (item) => {
  const { id, name, price, imgURL } = item;
  const {
    getProductQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = getProductQuantity(id);

  return (
    <article style={{ display: 'flex', gap: '2rem' }}>
      <p>{id}</p>
      <p>{name}</p>
      <p>{formatCurrency(price)}</p>
      <img style={{ width: '7.5rem', height: '7.5rem' }} src={imgURL} alt={name} />

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        {quantity === Number(0) ? (
          <button onClick={() => increaseCartQuantity(id)} type='button'>
            Add to cart
          </button>
        ) : (
          <>
            <button onClick={() => increaseCartQuantity(id)} type='button'>
              +
            </button>
            <div>
              <span>{quantity} in cart</span>
            </div>
            <button onClick={() => decreaseCartQuantity(id)} type='button'>
              -
            </button>
            <div>
              <button onClick={() => removeFromCart(id)} type='button'>
                Remove
              </button>
            </div>
          </>
        )}
      </div>
    </article>
  );
};
