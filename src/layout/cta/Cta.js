import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import styles from './Cta.module.scss';

gsap.registerPlugin(ScrollTrigger);

export const Cta = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "bottom bottom",
                end: "bottom top",
                pin: true,
                scrub: 3
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
    }, [])

    return (
        <section className={styles.cta_container} ref={containerRef}>
            <div className={styles.cta_background}>
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