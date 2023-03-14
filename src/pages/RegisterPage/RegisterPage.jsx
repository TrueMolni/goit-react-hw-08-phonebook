import { useDispatch } from 'react-redux';

import RegisterForm from '../../components/RegisterForm';

import { signup } from '../../redux/auth/auth-operations';
import styles from './RegisterPage.module.scss';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleSignup = data => {
    dispatch(signup(data));
  };

  return (
    <div className={styles.container}>
      <h1>This is the RegisterPage.</h1>
      <p>Please join us to continue </p>
      <RegisterForm onSubmit={handleSignup}></RegisterForm>
    </div>
  );
};
export default RegisterPage;
