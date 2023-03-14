import { nanoid } from 'nanoid';
import { useMemo } from 'react';
import styles from './TextField.module.scss';

const TextField = ({ label, handleChange, ...props }) => {
  const id = useMemo(() => nanoid(), []);

  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <input className={styles.field} onChange={handleChange} {...props} />
    </div>
  );
};
export default TextField;
