import { ReactComponent as LogoIcon } from '../../assets/icons/logo.svg';
import styles from './Button.module.scss';

export const Button = ({ text, buttonType, logo }) => {
  return (
    <button className={`${styles.button_container} ${styles[`${buttonType}`]}`}>
      {text}
      {logo && (
        <LogoIcon className={styles.button_icon} />
      )}
    </button>
  );
}