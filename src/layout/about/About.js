import { ReactComponent as LinkedinIcon } from '../../assets/icons/linkedin.svg';
import { ReactComponent as BehanceIcon } from '../../assets/icons/behance.svg';
import { ReactComponent as InstagramIcon } from '../../assets/icons/instagram.svg';

import { ProfileOverView } from '../../components/profile_overview/ProfileOverView';

export const About = () => {
    return (
        <ProfileOverView
            title="About"
            borderRight
            text={`Hi! I'm Luana Almeida, a designer and creative professional with a focus on UX/UI, web development, and visual storytelling. I love combining creativity with strategy to create clean, modern designs that meet my clients needs.\n
                    Fluent in both Portuguese and English, with basic Spanish, I’m skilled at managing digital projects, designing websites, and creating social media content. I’m passionate about crafting user-friendly experiences and collaborating with teams to bring ideas to life.`}
            socialMedia={[
                LinkedinIcon,
                BehanceIcon,
                InstagramIcon
            ]}
        />
    );
}