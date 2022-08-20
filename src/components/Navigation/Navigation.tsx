import { NavLink } from 'react-router-dom';

import styles from './navigation.module.scss';

export const Navigation = () => {
  const { navList } = styles;
  return (
    <nav>
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
            to='/store'
          >
            Store
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
