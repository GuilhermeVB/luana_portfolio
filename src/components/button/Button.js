import { ReactComponent as LogoIcon } from '../../assets/icons/logo.svg';
import styles from './Button.module.scss';

export const Button = ({ text, buttonType, logo }) => {
  return (
    <a
      className={`${styles.button_container} ${styles[`${buttonType}`]}`}
      href="https://mail.google.com/mail/u/1/?view=cm&to=luanauxdesigner@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
      {logo && (
        <LogoIcon className={styles.button_icon} />
      )}
    </a>
  );
}