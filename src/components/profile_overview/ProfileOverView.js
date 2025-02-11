import { ReactComponent as DropDownIcon } from '../../assets/icons/drop_down.svg';

import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';
import styles from './ProfileOverView.module.scss';

const motionSection = {
    hidden: {
        opacity: 0,
        y: "100%"
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: .5
        }
    }
}

export const ProfileOverView = ({ title, borderRight, text, socialMedia, copyRight, mainSectionStylesContainer }) => {
    const overviewRef = useRef(null)
    const isInView = useInView(overviewRef, { once: true })

    return (
        <motion.section
            ref={overviewRef}
            className={`${styles.overview_container} ${styles[`${title.toLowerCase()}_overview_container`]}`}
            variants={mainSectionStylesContainer ? motionSection : null}
            initial="hidden"
            animate={isInView ? "visible" : null}
        >
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
                        {socialMedia.map((socialMediaComponent, index) => (
                            <a
                                key={index}
                                className={styles.overview_social_link}
                                href={socialMediaComponent.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <socialMediaComponent.icon className={styles.overview_social_icon} />
                            </a>
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
        </motion.section>
    );
}