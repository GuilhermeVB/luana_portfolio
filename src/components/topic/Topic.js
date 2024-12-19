import { ReactComponent as DropDownIcon } from '../../assets/icons/drop_down.svg';

import styles from './Topic.module.scss';

export const Topic = ({ number, title }) => {
    return (
        <div className={styles.topic_container}>
            <span className={styles.topic_number}>
                {number}
            </span>
            <h2 className={styles.topic_title}>
                {title}
            </h2>
            <DropDownIcon className={styles.topic_icon} />
        </div>
    );
}