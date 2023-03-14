import { useSelector } from 'react-redux';

import NavAuth from './NavAuth/NavAuth';
import NavMenu from './NavMenu/NavMenu';

import { isUserLogin } from '../../redux/auth/auth-selector';

export const Navbar = () => {
  const isLogin = useSelector(isUserLogin);

  return (
    <div>
      {isLogin && <NavMenu />} {!isLogin && <NavAuth />}
    </div>
  );
};

export default Navbar;
