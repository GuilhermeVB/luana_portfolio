import { useEffect, useRef } from "react";
import Scrollbar from "smooth-scrollbar";

export const SmoothScroll = ({ children }) => {
    const scrollRef = useRef(null);

    useEffect(() => {
        Scrollbar.init(scrollRef.current, {
            damping: 0.08,
            delegateTo: document
        });
    }, []);

    return (
        <div className="scroll-container" ref={scrollRef}>
            {children}
        </div>
    );
}