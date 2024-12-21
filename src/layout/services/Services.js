import { ProfileOverView } from '../../components/profile_overview/ProfileOverView';
import { Topic } from '../../components/topic/Topic';
import styles from './Services.module.scss';

export const Services = () => {
    return (
        <section className={styles.services_container}>
            <ProfileOverView title="Services" borderBottom />
            <div className={styles.services_list}>
                <Topic
                    number="01"
                    title="Landings"
                    paragraph="I design high-converting, visually compelling landing pages tailored to capture attention,
                    communicate your message, and drive action."
                    defaultActivation
                />
                <Topic
                    number="02"
                    title="E-Commerce"
                    paragraph="Design and development of tailored e-commerce pages focused on intuitive navigation, engaging visuals,
                    and seamless functionality to enhance user experience and drive business growth."
                />
                <Topic
                    number="03"
                    title="Corporative"
                    paragraph="I design professional, user-friendly corporate websites that reflect your brand identity.
                    Combining functionality with clean design, each site ensures a strong and trustworthy online presence."
                />
                <Topic
                    number="04"
                    title="Mobile App"
                    paragraph="I create intuitive and visually appealing mobile apps, focusing on seamless functionality and user-friendly design.
                    Each app is tailored to meet your needs and enhance the user experience."
                />
                <Topic
                    number="05"
                    title="Dashboard"
                    paragraph="I design clean, intuitive, and functional dashboards that simplify data visualization and improve user interactions.
                    Tailored to your needs, each dashboard ensures efficiency and clarity."
                />
            </div>
        </section>
    );
}