import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import styles from './Banner.module.scss';

export const Banner = () => {
    const bannerNameRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo(
            bannerNameRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1, ease: "power1.in" }
        );
    }, [])

    return (
        <section className={styles.banner_container}>
            <div className={styles.banner_background}>
                <div ref={bannerNameRef} className={styles.banner_name}>
                    <span className={styles.banner_name_first}>
                        Luana
                    </span>
                    <span className={styles.banner_name_second}>
                        Almeida
                    </span>
                </div>
            </div>
        </section>
    );
}