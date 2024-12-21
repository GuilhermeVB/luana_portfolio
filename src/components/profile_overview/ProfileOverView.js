import { ReactComponent as DropDownIcon } from '../../assets/icons/drop_down.svg';
import React from 'react';

import styles from './ProfileOverView.module.scss';

export const ProfileOverView = ({ title, borderRight, borderBottom, text, socialMedia, copyRight }) => {
    return (
        <section className={`${styles.overview_container} ${styles[`${title.toLowerCase()}_overview_container`]}  ${borderBottom && styles['border-b']}`}>
            <div className={`${styles.overview_titlebox} ${borderRight && styles['border-r']}`}>
                <div className={styles.overview_titlebox_expander}>
                    <h2 className={styles.overview_titlebox_expander_heading}>
                        {title}
                    </h2>
                    <DropDownIcon className={styles.overview_titlebox_expander_icon} />
                </div>
            </div>
            {
                text && (
                    <div className={`${styles.overview_content} ${styles[`${title.toLowerCase()}-content-w`]}`}>
                        <p className={`${styles.overview_content_text} ${styles[`${title.toLowerCase()}-text-w`]}`}>
                            {text.split('\n').map((line, index) => (
                                <React.Fragment key={index}>
                                    {line}
                                    <br />
                                </React.Fragment>
                            ))}
                        </p>
                    </div>
                )
            }
            {
                socialMedia && (
                    <div className={styles.overview_social}>
                        {socialMedia.map((IconComponent, index) => (
                            <IconComponent className={styles.overview_social_icon} key={index} />
                        ))}
                    </div>
                )
            }
            {
                copyRight && (
                    <div className={styles.overview_copyright}>
                        <span className={styles.overview_copyright_text}>
                            &copy; 2022 - 2025
                        </span>
                    </div>
                )
            }
        </section>
    );
}