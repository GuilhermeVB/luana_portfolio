import styles from './Card.module.scss';

export const Card = ({ imageData }) => {
    return (
        <div className={styles.card_container}>
            {imageData.map((data, index) => (
                <figure className={styles.card} key={index}>
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