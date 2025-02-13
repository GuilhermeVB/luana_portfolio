import { ReactComponent as LogoIcon } from '../../assets/icons/logo.svg';
import { ReactComponent as BehanceArrowIcon } from '../../assets/icons/bahance_arrow.svg';

import { Button } from '../../components/button/Button';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header data-scroll-section className={styles.header_container}>
      <div className={styles.header}>
        <div className={styles.header_logo}>
          <LogoIcon className={styles.header_logo_icon} />
          <span className={styles.header_logo_heading}>
            Luana Almeida
          </span>
        </div>
        <Button text="Get in touch" buttonType="b-black" />
      </div>
      <div className={styles.subheader}>
        <span className={styles.subheader_text}>
          UX/UI Designer
        </span>
        <a
          className={styles.subheader_behance}
          href="https://www.behance.net/luanaalmeida512"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.subheader_text}>
            Behance
          </span>
          <BehanceArrowIcon className={styles.subheader_behance_icon} />
        </a>
      </div>
    </header>
  );
}