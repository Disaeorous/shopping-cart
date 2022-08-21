import { createContext, ReactNode, useContext, useState } from 'react';
import { ChildrenJSX } from '../common/types';

interface ShoppingCartContextProps {
  getProductQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
}

interface CartItemProps {
  id: number;
  quantity: number;
}

const ShoppingCartContext = createContext({} as ShoppingCartContextProps);

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};

export const ShoppingCartProvider = ({ children }: ChildrenJSX) => {
  const [cartItems, setCartItems] = useState<CartItemProps[]>([]);

  const getProductQuantity = (id: number) => {
    return cartItems.find((product) => product.id === id)?.quantity || 0;
  };

  const increaseCartQuantity = (id: number) => {
    setCartItems((currProducts) => {
      if (currProducts.find((item) => item.id === id) == null) {
        return [...currProducts, { id, quantity: 1 }];
      } else {
        return currProducts.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const decreaseCartQuantity = (id: number) => {
    setCartItems((currProducts) => {
      if (currProducts.find((item) => item.id === id)?.quantity === 1) {
        return currProducts.filter((item) => item.id !== id);
      } else {
        return currProducts.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems((currProducts) => {
      return currProducts.filter((item) => item.id !== id);
    });
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        getProductQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
