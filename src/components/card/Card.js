import styles from './Card.module.scss';

export const Card = ({ imageData, firstVerticalAlign, secondVerticalAlign }) => {
    return (
        <div className={styles.card_container}>
            {imageData.map((data, index) => (
                <figure className={`${styles.card} ${firstVerticalAlign && styles['card-first-mt']} ${secondVerticalAlign && styles['card-second-mt']}`} key={index}>
                    <img className={styles.card_image} src={data.path} alt="" />
                    <figcaption className={styles.card_info}>
                        <span className={styles.card_info_name}>
                            {data.name}
                        </span>
                        <span className={styles.card_info_year}>
                            {data.year}
                        </span>
                    </figcaption>
                </figure>
            ))}
        </div>
    );
}