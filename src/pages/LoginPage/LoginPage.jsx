import { useDispatch } from 'react-redux';

import LoginForm from '../../components/LoginForm';

import { login } from '../../redux/auth/auth-operations';
import styles from './LoginPage.module.scss';

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleLogin = data => {
    dispatch(login(data));
  };

  return (
    <div className={styles.container}>
      <h1>This is the LoginPage</h1>
      <p> Welcome back </p>
      <LoginForm onSubmit={handleLogin}></LoginForm>
    </div>
  );
};
export default LoginPage;
