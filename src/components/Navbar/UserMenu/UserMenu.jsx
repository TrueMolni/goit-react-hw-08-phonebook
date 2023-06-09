import styles from './UserMenu.module.scss';
import { useSelector, useDispatch } from 'react-redux';

import { logout } from 'redux/auth/auth-operations';
import { getUser } from 'redux/auth/auth-selector';

const UserMenu = () => {
  const { email } = useSelector(getUser);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={styles.container}>
      <p>{email}</p>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default UserMenu;
