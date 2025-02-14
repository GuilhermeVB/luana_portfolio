import { motion, useMotionValue, useMotionValueEvent, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';
import styles from './Cta.module.scss';

export const Cta = ({ scroll }) => {
    const containerRef = useRef(null)
    const scrollYProgress = useMotionValue(0);

    useEffect(() => {
        if (!scroll) return;

        scroll.on("scroll", (args) => {
            if (!containerRef.current) return;

            const section = containerRef.current.getBoundingClientRect();
            const scrollTop = args.scroll.y;
            const start = section.top + scrollTop;
            const end = section.bottom + scrollTop;
            const progress = (scrollTop - start) / (end - start);

            scrollYProgress.set(progress);
        });
    }, [scroll, scrollYProgress])

    useMotionValueEvent(scrollYProgress, "change", (val) => { console.log(val) })

    const yBackground = useTransform(
        scrollYProgress,
        [0, .5],
        [0, 966]
    )

    const y = useTransform(
        scrollYProgress,
        [0, .3],
        [700, 0]
    );

    const opacity = useTransform(
        scrollYProgress,
        [.4, .5],
        [0, 1]
    )

    return (
        <section
            data-scroll-section
            className={styles.cta_container}
            ref={containerRef}
        >
            <motion.div className={styles.cta_background} style={{ y: yBackground }}>
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
            </motion.div>
        </section >
    );
}