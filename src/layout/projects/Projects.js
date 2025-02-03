import developerPortfolio from '../../assets/images/developer_portfolio.jpg';
import natureBeauty from '../../assets/images/nature_beauty.jpg';
import radioHead from '../../assets/images/radiohead.jpg';
import signalis from '../../assets/images/signalis.jpg';
import sugarFantasy from '../../assets/images/sugar_fantasy.jpg';
import greecGuideTrip from '../../assets/images/greece_guide_trip.jpg'

import { Card } from '../../components/card/Card';
import { ProfileOverView } from '../../components/profile_overview/ProfileOverView';
import styles from './Projects.module.scss';

export const Projects = () => {
    return (
        <section className={styles.projects_container}>
            <div className={styles.projects_animation_container}>
                <ProfileOverView
                    title="Projects"
                    text={`Welcome to my project showcase! Here, creativity meets functionality through designs that are intuitive, visually striking, and purpose-driven. Each project reflects my dedication to crafting impactful solutions that elevate user experiences.\n
                    Feel free to explore and connect for future collaborations!`}
                    copyRight
                    mainSectionStylesContainer={styles.projects_animation_container}
                />
            </div>
            <div className={styles.project_cards}>
                <Card imageData={[
                    { path: radioHead, name: "OK Computer", year: "2024", imageLink: "https://www.behance.net/gallery/212982157/Landing-Page-Ok-Computer-Radiohead" },
                    { path: natureBeauty, name: "Nature Beauty", year: "2023", imageLink: "https://www.behance.net/gallery/189111609/Nature-Beauty-Website-E-commerce" }
                ]}
                />
                <Card imageData={[
                    { path: greecGuideTrip, name: "Greece Guide Trip", year: "2025", imageLink: "https://www.behance.net/gallery/217771201/Landing-Page-Greece-Guide-Trip" }
                ]} firstVerticalAlign
                />
                <Card imageData={[
                    { path: signalis, name: "Signalis", year: "2023", imageLink: "https://www.behance.net/gallery/189753903/Signalis-Landing-Page" }
                ]} secondVerticalAlign
                />
                <Card imageData={[
                    { path: developerPortfolio, name: "Developer Portfolio", year: "2025", imageLink: "https://www.behance.net/gallery/217030377/Developer-Portfolio-Landing-Page" },
                    { path: sugarFantasy, name: "Sugar Fantasy", year: "2022", imageLink: "https://www.behance.net/gallery/189215813/Sugar-Fantasy-Landing-Page/modules/1070062589" }
                ]}
                />
            </div>
        </section>
    );
}