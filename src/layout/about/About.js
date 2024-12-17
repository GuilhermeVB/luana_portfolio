import { ReactComponent as DropDownIcon } from '../../assets/icons/drop_down.svg';
import { ReactComponent as LinkedinIcon } from '../../assets/icons/linkedin.svg';
import { ReactComponent as BehanceIcon } from '../../assets/icons/behance.svg';
import { ReactComponent as InstagramIcon } from '../../assets/icons/instagram.svg';

import styles from './About.module.scss';

export const About = () => {
    return (
        <section className={styles.about_container}>
            <div className={styles.about_titlebox}>
                <div className={styles.about_titlebox_expander}>
                    <h2 className={styles.about_titlebox_expander_heading}>
                        About
                    </h2>
                    <DropDownIcon className={styles.about_titlebox_icon} />
                </div>
            </div>
            <div className={styles.about_content}>
                <p className={styles.about_content_text}>
                    Hi! I'm Luana Almeida, a designer and creative professional with a focus on UX/UI, web development, and visual storytelling.
                    I love combining creativity with strategy to create clean, modern designs that meet my clients needs.
                    <br /><br />
                    Fluent in both Portuguese and English, with basic Spanish, I’m skilled at managing digital projects, designing websites, and
                    creating social media content. I’m passionate about crafting user-friendly experiences and collaborating with teams to bring ideas to life.
                </p>
            </div>
            <div className={styles.about_social}>
                <LinkedinIcon className={styles.about_social_icon} />
                <BehanceIcon className={styles.about_social_icon} />
                <InstagramIcon className={styles.about_social_icon} />
            </div>
        </section>
    );
}