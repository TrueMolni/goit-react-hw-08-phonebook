import TextField from '../TextField';
import fields from './fields';
import Button from '../Button';

import useForm from '../../hooks/useForm';
import styles from './LoginForm.module.scss';
import initialState from './initialState';

const LoginForm = ({ onSubmit }) => {
  const { handleChange, handleSubmit, state } = useForm({
    initialState,
    onSubmit,
  });
  const { email, password } = state;
  // randoma@email.com
  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <TextField value={email} onChange={handleChange} {...fields.email} />
        <TextField
          value={password}
          onChange={handleChange}
          {...fields.password}
        />
        <Button>Login</Button>
      </form>
    </div>
  );
};

export default LoginForm;
