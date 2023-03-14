import styles from './Button.module.scss';

const Button = ({ children, type = 'submit' }) => {
  return (
    <button type={type} className={styles.btn}>
      {children}
    </button>
  );
};

export default Button;
