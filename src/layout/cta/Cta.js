import styles from './Cta.module.scss';

export const Cta = () => {
    return (
        <section className={styles.cta_container}>
            <div className={styles.cta_background}>
                <h1 className={styles.cta_heading}>
                    Design empowers experiences
                </h1>
            </div>
        </section>
    );
}