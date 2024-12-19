import { ProfileOverView } from '../../components/profile_overview/ProfileOverView';
import { Topic } from '../../components/topic/Topic';
import styles from './Services.module.scss';

export const Services = () => {
    return (
        <section className={styles.services_container}>
            <ProfileOverView title="Services" borderBottom />
            <Topic number="01" title="Landings" />
            <Topic number="02" title="E-Commerce" />
            <Topic number="03" title="Corporative" />
            <Topic number="04" title="Mobile App" />
            <Topic number="05" title="Dashboard" />
        </section>
    );
}