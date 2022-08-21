import { NavLink } from 'react-router-dom';
import { ActiveLinkProps } from '../../../common/interfaces';
import { linkDefault, linkActive } from '../../../styles/tsStyles';

export const activeLink = (isActive: boolean) => {
  return isActive ? linkActive : linkDefault;
};

export const NavigationLink: React.FC<ActiveLinkProps> = (props) => {
  const { label, path, cb } = props;

  return (
    <>
      <NavLink style={({ isActive }) => cb(isActive)} to={path}>
        {label}
      </NavLink>
    </>
  );
};
