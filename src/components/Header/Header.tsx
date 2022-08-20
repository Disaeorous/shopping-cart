import styles from './header.module.scss';

import { Navigation as Nav } from '../Navigation';
import { Button } from '../Button';

export const Header = () => {
  const { header } = styles;

  return (
    <header className={header}>
      <Nav />
      <Button />
    </header>
  );
};
