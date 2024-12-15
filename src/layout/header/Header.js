import { ReactComponent as LogoIcon } from '../../assets/icons/logo.svg';
import { ReactComponent as BehanceIcon } from '../../assets/icons/arrow.svg';

import { Button } from '../../components/button/Button';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header_container}>
      <div className={styles.header}>
        <div className={styles.header_logo}>
          <LogoIcon className={styles.header_logo_icon} />
          <span className={styles.header_logo_heading}>
            Luana Almeida
          </span>
        </div>
        <Button />
      </div>
      <div className={styles.subheader}>
        <span className={styles.subheader_text}>
          UX/UI Designer
        </span>
        <div className={styles.subheader_behance}>
          <span className={styles.subheader_text}>
            Behance
          </span>
          <BehanceIcon className={styles.subheader_behance_icon} />
        </div>
      </div>
    </header>
  );
}