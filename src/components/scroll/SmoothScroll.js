import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";
import Scrollbar from "smooth-scrollbar";

gsap.registerPlugin(ScrollTrigger);

export const SmoothScroll = ({ children }) => {
    const scrollRef = useRef(null);

    useEffect(() => {
        const scroller = Scrollbar.init(scrollRef.current, {
            damping: 0.1,
            delegateTo: document
        });

        ScrollTrigger.scrollerProxy(scrollRef.current, {
            scrollTop(value) {
                if (arguments.length) {
                    scroller.scrollTop = value;
                }
                return scroller.scrollTop;
            },
            getBoundingClientRect() {
                return {
                    top: 0,
                    left: 0,
                    width: window.innerWidth,
                    height: window.innerHeight,
                };
            }
        });

        scroller.addListener(ScrollTrigger.update);
        ScrollTrigger.refresh();
    }, [scrollRef]);

    return (
        <div className="scroll-container" ref={scrollRef}>
            {children}
        </div>
    );
}