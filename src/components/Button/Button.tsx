import { MdOutlineShoppingCart } from 'react-icons/md';

import styles from './button.module.scss';

export const Button = () => {
  const { btnPrimary, btnIcon, btnCount } = styles;

  return (
    <button className={btnPrimary} type='button'>
      <MdOutlineShoppingCart className={btnIcon} />
      <span className={btnCount}>51</span>
    </button>
  );
};
