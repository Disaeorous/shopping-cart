import { NavListProps } from '../../../common/interfaces';
import styles from '../navigation.module.scss';

export const NavList: React.FC<NavListProps> = (list) => {
  const { children, style, className } = list;

  return (
    <ul style={style} className={`${className ? className : styles.navList} `}>
      {children}
    </ul>
  );
};
