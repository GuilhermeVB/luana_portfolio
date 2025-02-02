import styles from './Card.module.scss';

export const Card = ({ imageData, firstVerticalAlign, secondVerticalAlign }) => {
    return (
        <div className={styles.card_container}>
            {imageData.map((data, index) => (
                <figure className={`${styles.card} ${firstVerticalAlign && styles['card-first-mt']} ${secondVerticalAlign && styles['card-second-mt']}`} key={index}>
                    <div className={styles.card_assets}>
                        <a
                            className={styles.card_assets_link}
                            href={data.imageLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img className={styles.card_assets_link_image} src={data.path} alt={data.name} />
                            {
                                data.name === "OK Computer" ? (
                                    <div className={styles.card_assets_link_hidden}>
                                        <img className={styles.card_assets_link_hidden_image} src={data.path} alt="" />
                                        <img className={styles.card_assets_link_hidden_image} src={data.path} alt="" />
                                        <img className={styles.card_assets_link_hidden_image} src={data.path} alt="" />
                                        <img className={styles.card_assets_link_hidden_image} src={data.path} alt="" />
                                    </div>
                                ) : null
                            }
                        </a>
                    </div>
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