import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import styles from './Cta.module.scss';

export const Cta = () => {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef
    });

    useMotionValueEvent(scrollYProgress, "change", (val) => { console.log(val) })

    const y = useTransform(
        scrollYProgress,
        [0, .6],
        [700, 0]
    );

    const opacity = useTransform(
        scrollYProgress,
        [.7, 1],
        [0, 1]
    )

    return (
        <section className={styles.cta_container} ref={containerRef} >
            <div className={styles.cta_background}>
                <motion.h1
                    className={`${styles.cta_heading} ${styles.cta_heading_filled}`}
                    style={{ y }}
                >
                    Design empowers experiences
                </motion.h1>
                <motion.h1
                    className={`${styles.cta_heading} ${styles.cta_heading_outline}`}
                    style={{ y }}
                >
                    Design empowers experiences
                </motion.h1>
                <motion.span
                    className={styles.cta_brief}
                    style={{ opacity }}
                >
                    Committed to crafting intuitive, visually stunning, and highly functional interfaces.
                </motion.span>
            </div>
        </section >
    );
}