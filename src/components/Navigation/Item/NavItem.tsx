import { NavItemProps } from '../../../common/interfaces';
import styles from '../navigation.module.scss';

export const NavItem: React.FC<NavItemProps> = (item) => {
  const { children, component, style, className } = item;

  return (
    <li style={style} className={`${className ? className : styles.navItem} `}>
      {children}
      {component}
    </li>
  );
};
