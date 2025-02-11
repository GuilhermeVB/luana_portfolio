import { useEffect, useRef } from "react";
import Scrollbar from "smooth-scrollbar";

export const SmoothScroll = ({ children }) => {
    const scrollRef = useRef(null);

    useEffect(() => {
        const scrollbar = Scrollbar.init(scrollRef.current, {
            damping: 0.08,
            delegateTo: document
        });

        return () => {
            scrollbar.destroy();
        };
    }, []);

    return (
        <div className="scroll-container" ref={scrollRef}>
            {children}
        </div>
    );
}