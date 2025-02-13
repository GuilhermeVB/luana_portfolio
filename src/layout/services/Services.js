import { useState } from 'react';

import { ProfileOverView } from '../../components/profile_overview/ProfileOverView';
import { Topic } from '../../components/topic/Topic';
import styles from './Services.module.scss';

export const Services = () => {
    const [topics, setTopics] = useState([
        {
            number: "01",
            title: "Landings",
            paragraph: "I design high-converting, visually compelling landing pages tailored to capture attention, communicate your message, and drive action.",
            isActive: true,
            lineHidden: true
        },
        {
            number: "02",
            title: "E-Commerce",
            paragraph: "Design and development of tailored e-commerce pages focused on intuitive navigation, engaging visuals, and seamless functionality to enhance user experience and drive business growth.",
            isActive: false,
            lineHidden: true
        },
        {
            number: "03",
            title: "Corporative",
            paragraph: "I design professional, user-friendly corporate websites that reflect your brand identity. Combining functionality with clean design, each site ensures a strong and trustworthy online presence.",
            isActive: false,
            lineHidden: false
        },
        {
            number: "04",
            title: "Mobile App",
            paragraph: "I create intuitive and visually appealing mobile apps, focusing on seamless functionality and user-friendly design. Each app is tailored to meet your needs and enhance the user experience.",
            isActive: false,
            lineHidden: false
        },
        {
            number: "05",
            title: "Dashboard",
            paragraph: "I design clean, intuitive, and functional dashboards that simplify data visualization and improve user interactions. Tailored to your needs, each dashboard ensures efficiency and clarity.",
            isActive: false,
            lineHidden: false
        }
    ]);

    function switchStatus(index) {
        setTopics(prevState => {
            let nextState = false;
            return prevState.map((topic, i) => {
                // Primeiro, atualiza o status de "isActive"
                const updatedTopic = { ...topic, isActive: i === index ? !topic.isActive : false };

                // Em seguida, ajusta o status de "lineHidden" baseado em "isActive"
                if (updatedTopic.isActive) {
                    nextState = true;
                    return { ...updatedTopic, lineHidden: true };
                } else if (nextState) {
                    nextState = false;
                    return { ...updatedTopic, lineHidden: true };
                } else {
                    return { ...updatedTopic, lineHidden: false };
                }
            });
        });
    }

    return (
        <section data-scroll-section className={styles.services_container}>
            <ProfileOverView title="Services" />
            <div className={styles.services_list}>
                {topics.map((topic) => (
                    <Topic
                        key={topic.number}
                        number={topic.number}
                        title={topic.title}
                        paragraph={topic.paragraph}
                        dropDownActivated={topic.isActive}
                        dropDownToggle={switchStatus}
                        line={topic.lineHidden}
                    />
                ))}
            </div>
        </section>
    );
}