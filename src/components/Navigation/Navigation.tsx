import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav>
      <ul style={{ display: 'flex', gap: '2rem', color: 'var(--blue-text)' }}>
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
