import { NavLink } from 'react-router-dom';

import styles from './navigation.module.scss';

export const Navigation = () => {
  const { nav, navList } = styles;
  return (
    <nav className={nav}>
      <ul className={navList}>
        <li>
          <NavLink
            style={({ isActive }) => (isActive ? { color: 'red' } : { color: 'orange' })}
            to='/'
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => (isActive ? { color: 'red' } : { color: 'orange' })}
            to='/about'
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => (isActive ? { color: 'red' } : { color: 'orange' })}
            to='/shop'
          >
            Shop
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
