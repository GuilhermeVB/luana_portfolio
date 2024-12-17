import artemiaMoveis from '../../assets/images/artemia_moveis.jpg';
import natureBeauty from '../../assets/images/nature_beauty.jpg';
import radioHead from '../../assets/images/radiohead.jpg';
import signalis from '../../assets/images/signalis.jpg';
import sugarFantasy from '../../assets/images/sugar_fantasy.jpg';
import tattoArtist from '../../assets/images/tatto_artist.jpg';

import { Card } from '../../components/card/Card';
import { ProfileOverView } from '../../components/profile_overview/ProfileOverView';
import styles from './Projects.module.scss';

export const Projects = () => {
    return (
        <>
            <ProfileOverView
                title="Projects"
                borderBottom
                text={`Welcome to my project showcase! Here, creativity meets functionality through designs that are intuitive, visually striking, and purpose-driven. Each project reflects my dedication to crafting impactful solutions that elevate user experiences.\n
                Feel free to explore and connect for future collaborations!`}
                copyRight
            />
            <div className={styles.project_cards}>
                <Card imageData=
                    {[
                        { path: radioHead, name: "OK Computer", year: "2024" },
                        { path: tattoArtist, name: "Tatto Artist", year: "2023" }
                    ]}
                />
                <Card imageData=
                    {[
                        { path: natureBeauty, name: "Nature Beauty", year: "2023" }
                    ]}
                />
                <Card imageData=
                    {[
                        { path: signalis, name: "Signalis", year: "2023" }
                    ]}
                />
                <Card imageData=
                    {[
                        { path: artemiaMoveis, name: "Artêmia Móveis", year: "2024" },
                        { path: sugarFantasy, name: "Sugar Fanasy", year: "2022" }
                    ]}
                />
            </div>
        </>
    );
}