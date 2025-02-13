import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll"

export const SmoothScroll = ({ children, setScroll }) => {
    const scrollRef = useRef(null);

    useEffect(() => {
        const scroll = new LocomotiveScroll({
            el: scrollRef.current,
            smooth: true,
            lerp: 0.1,
        });

        if (setScroll) setScroll(scroll)

        return () => {
            scroll.destroy();
        };
    }, [setScroll]);

    return (
        <div data-scroll-container className="scroll-container" ref={scrollRef}>
            {children}
        </div>
    );
}