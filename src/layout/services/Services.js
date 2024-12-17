import { ProfileOverView } from '../../components/profile_overview/ProfileOverView';
import styles from './Services.module.scss';

export const Services = () => {
    return (
        <section className={styles.services_container}>
            <ProfileOverView title="Services" />
        </section>
    );
}