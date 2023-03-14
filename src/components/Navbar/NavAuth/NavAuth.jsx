import { NavLink } from 'react-router-dom';
import styles from './nav-auth.module.scss';

const NavAuth = () => {
  return (
    <div className={styles.container}>
      <NavLink className={styles.link} to="/register">
        Register
      </NavLink>
      <NavLink className={styles.link} to="/login">
        Login
      </NavLink>
    </div>
  );
};

export default NavAuth;
