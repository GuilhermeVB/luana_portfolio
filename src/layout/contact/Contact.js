import { Button } from '../../components/button/Button';
import styles from './Contact.module.scss';

export const Contact = () => {
    return (
        <section className={styles.contact_container}>
            <div className={styles.contact_content}>
                <h2 className={styles.contact_content_heading}>
                    Let’s Connect
                </h2>
                <Button text="Contact Me" buttonType="b-white-alt" logo />
            </div>
            <footer className={styles.contact_footer}>
                <span className={styles.contact_footer_copy}>
                    &copy; All rights Reserved 2025
                </span>
            </footer>
        </section>
    );
}