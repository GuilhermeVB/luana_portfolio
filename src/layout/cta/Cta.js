import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './Cta.module.scss';

const motionTitle = {
    hidden: {
        y: "100vh"
    },
    visible: {
        y: 0,
        transition: {
            duration: 1
        }
    }
}

const motionSpan = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 1
        }
    }
}

export const Cta = () => {
    const backgroundRef = useRef(null)
    const isInView = useInView(backgroundRef)

    return (
        <section className={styles.cta_container}>
            <div ref={backgroundRef} className={styles.cta_background}>
                <motion.h1
                    className={`${styles.cta_heading} ${styles.cta_heading_filled}`}
                    variants={motionTitle}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    Design empowers experiences
                </motion.h1>
                <motion.h1
                    className={`${styles.cta_heading} ${styles.cta_heading_outline}`}
                    variants={motionTitle}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    Design empowers experiences
                </motion.h1>
                <motion.span
                    className={styles.cta_brief}
                    variants={motionSpan}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    Committed to crafting intuitive, visually stunning, and highly functional interfaces.
                </motion.span>
            </div>
        </section>
    );
}