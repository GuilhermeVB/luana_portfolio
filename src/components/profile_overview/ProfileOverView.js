import { ReactComponent as DropDownIcon } from '../../assets/icons/drop_down.svg';

import React from 'react';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

import styles from './ProfileOverView.module.scss';

gsap.registerPlugin(ScrollTrigger);

export const ProfileOverView = ({ title, borderRight, text, socialMedia, copyRight, mainSectionStylesContainer }) => {
    const containerRef = useRef(null);

    useGSAP(() => {
        if (mainSectionStylesContainer) {
            const slide = gsap.from(containerRef.current, {
                y: "100%",
                opacity: 0,
                duration: 1
            })

            ScrollTrigger.create({
                trigger: `.${mainSectionStylesContainer}`,
                scroller: ".scroll-container",
                start: "bottom bottom",
                end: "top top",
                toggleActions: "play none none none",
                animation: slide
            })
        }
    }, [mainSectionStylesContainer])

    return (
        <section className={`${styles.overview_container} ${styles[`${title.toLowerCase()}_overview_container`]}`} ref={containerRef}>
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
        </section>
    );
}