import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll"

export const SmoothScroll = ({ children, setScroll }) => {
    const scrollRef = useRef(null);
    const isMobile = window.innerWidth <= 768;

    useEffect(() => {
        const scroll = new LocomotiveScroll({
            el: scrollRef.current,
            smooth: true,
            smartphone: {
                smooth: true
            },
            tablet: {
                smooth: true
            },
            lerp: 0.08,
            
        });

        if (setScroll) setScroll(scroll)

        return () => {
            scroll.destroy();
        };
    }, [setScroll, isMobile]);

    return (
        <div data-scroll-container className="scroll-container" ref={scrollRef}>
            {children}
        </div>
    );
}