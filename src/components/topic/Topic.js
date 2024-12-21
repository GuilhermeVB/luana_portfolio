import { ReactComponent as DropDownIcon } from '../../assets/icons/drop_down.svg';
import { useState } from 'react';

import { Button } from '../button/Button';
import styles from './Topic.module.scss';

export const Topic = ({ number, title, paragraph, defaultActivation }) => {
    const [dropDownActivated, setDropDownActivated] = useState(defaultActivation ? true : false);

    function dropDownToggle() {
        setDropDownActivated(!dropDownActivated);
    }

    return (
        <div className={`${styles.topic_background} ${dropDownActivated && styles['topic_background_alt']}`} onClick={dropDownActivated ? dropDownToggle : null}>
            <div className={`${styles.topic_container} ${dropDownActivated && styles['topic_container_alt']}`} onClick={dropDownActivated ? null : dropDownToggle}>
                <span className={`${styles.topic_number} ${dropDownActivated && styles['topic_number_alt']}`}>
                    {number}
                </span>
                <div className={styles.topic_content}>
                    <h2 className={`${styles.topic_content_title} ${dropDownActivated && styles['topic_content_title_alt']}`}>
                        {title}
                    </h2>
                    {dropDownActivated && (
                        <div className={styles.topic_content_info}>
                            <p className={styles.topic_content_info_paragraph}>
                                {paragraph}
                            </p>
                            <Button text="Get in touch" buttonType="b-white" />
                        </div>
                    )}
                </div>
                <DropDownIcon className={`${styles.topic_icon} ${dropDownActivated && styles['topic_icon_alt']}`} />
            </div>
        </div>
    );
}