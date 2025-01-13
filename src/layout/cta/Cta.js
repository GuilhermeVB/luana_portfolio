import styles from './Cta.module.scss';

export const Cta = () => {
    return (
        <section className={styles.cta_container}>
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