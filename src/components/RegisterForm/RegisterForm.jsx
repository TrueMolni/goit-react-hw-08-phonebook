import useForm from '../../hooks/useForm';
import styles from './RegisterForm.module.scss';
import initialState from './initialState';

import TextField from '../TextField';
import fields from './fields';
import Button from '../Button';

const RegisterForm = ({ onSubmit }) => {
  const { handleChange, handleSubmit, state } = useForm({
    initialState,
    onSubmit,
  });
  const { name, email, password } = state;

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <TextField value={name} onChange={handleChange} {...fields.name} />
        <TextField value={email} onChange={handleChange} {...fields.email} />
        <TextField
          value={password}
          onChange={handleChange}
          {...fields.password}
        />
        <Button>Register</Button>
      </form>
    </div>
  );
};

export default RegisterForm;
