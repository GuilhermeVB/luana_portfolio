import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";
import Scrollbar from "smooth-scrollbar";

gsap.registerPlugin(ScrollTrigger)

const scrollerOptions = {
    damping: 0.1
}

export const SmoothScroll = ({ children }) => {
    const scrollRef = useRef(null);

    useEffect(() => {
        const scroller = Scrollbar.init(scrollRef.current, scrollerOptions);

        ScrollTrigger.scrollerProxy(scrollRef.current, {
            scrollTop(value) {
                if (arguments.length) {
                    scroller.scrollTop = value;
                }
                return scroller.scrollTop;
            }
        });

        scroller.addListener(ScrollTrigger.update);

        if (document.querySelector('.gsap-marker-scroller-start')) {
            const markers = gsap.utils.toArray('[class *= "gsap-marker"]');

            scroller.addListener(({ offset }) => {
                gsap.set(markers, { marginTop: -offset.y })
            });
        }
    }, [scrollRef]);

    return (
        <div className="scroll-container" ref={scrollRef}>
            {children}
        </div>
    );
}