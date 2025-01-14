import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

import styles from './Cta.module.scss';

gsap.registerPlugin(ScrollTrigger);

export const Cta = () => {
    const backgroundRef = useRef(null);

    useGSAP(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: backgroundRef.current,
                start: "center 60%",
                end: "center 60%",
                toggleActions: "play none reverse none"
            }
        })
            .from(`.${styles.cta_heading}`, {
                y: "100vh",
                duration: 1
            })
            .from(`.${styles.cta_brief}`, {
                opacity: 0,
                duration: 1
            })

    }, { scope: backgroundRef })

    return (
        <section className={styles.cta_container}>
            <div className={styles.cta_background} ref={backgroundRef}>
                <h1 className={`${styles.cta_heading} ${styles.cta_heading_filled}`}>
                    Design empowers experiences
                </h1>
                <h1 className={`${styles.cta_heading} ${styles.cta_heading_outline}`}>
                    Design empowers experiences
                </h1>
                <span className={styles.cta_brief}>
                    Committed to crafting intuitive, visually stunning, and highly functional interfaces.
                </span>
            </div>
        </section>
    );
}