import { ProfileOverView } from '../../components/profile_overview/ProfileOverView';
import styles from './Projects.module.scss';

export const Projects = () => {
    return (
        <section className={styles.projects_container}>
            <ProfileOverView
                title="Projects"
                text={`Welcome to my project showcase! Here, creativity meets functionality through designs that are intuitive, visually striking, and purpose-driven. Each project reflects my dedication to crafting impactful solutions that elevate user experiences.\n
                Feel free to explore and connect for future collaborations!`}
                copyRight
            />
        </section>
    );
}