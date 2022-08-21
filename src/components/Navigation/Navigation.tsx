import navRoutes from '../../data/navRoutes.json';
import { NavigationProps, ActiveLinkProps2 } from '../../common/interfaces';

import styles from './navigation.module.scss';

import { NavItem } from './Item';
import { NavList } from './List';
import { NavigationLink, activeLink } from './Link';

export const NavItems = () => {
  return (
    <>
      {navRoutes.map((active: ActiveLinkProps2) => {
        return (
          <NavItem key={active.id}>
            <NavigationLink {...active} cb={activeLink} />
          </NavItem>
        );
      })}
    </>
  );
};

export const Navigation: React.FC<NavigationProps> = (props) => {
  const { className, style } = props;

  return (
    <nav style={style} className={`${className ? className : styles.nav} `}>
      <NavList>
        <NavItems />
      </NavList>
    </nav>
  );
};
