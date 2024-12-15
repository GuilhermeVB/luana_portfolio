import styles from './Banner.module.scss';

export const Banner = () => {
    return (
        <section className={styles.banner_container}>
            <div className={styles.banner_background}>
                <div className={styles.banner_name}>
                    <span className={styles.banner_name_first}>
                        Luana
                    </span>
                    <span className={styles.banner_name_second}>
                        Almeida
                    </span>
                </div>
            </div>
        </section>
    );
}