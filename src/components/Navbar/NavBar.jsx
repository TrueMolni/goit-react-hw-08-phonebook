import { useSelector } from 'react-redux';

import NavAuth from './NavAuth';
import UserMenu from './UserMenu';

import { isUserLogin } from '../../redux/auth/auth-selector';

export const Navbar = () => {
  const isLogin = useSelector(isUserLogin);

  return (
    <div>
      {!isLogin && <NavAuth />}
      {isLogin && <UserMenu />}
    </div>
  );
};

export default Navbar;
