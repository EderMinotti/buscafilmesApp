
import styles from "./input.module.css";

export const Input = ({ type, name, placeholder, value, onChange }) => {

  return (
    <div className={styles.container}>
      <label htmlFor={name}>{name}</label>
      <input
        required
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        id={name}
      />
    </div>
  );
};
