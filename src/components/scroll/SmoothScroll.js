import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import LocomotiveScroll from "locomotive-scroll";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger)

export const SmoothScroll = ({ children }) => {
    const scrollRef = useRef(null);

    useGSAP(() => {
        const scroller = new LocomotiveScroll({
            el: scrollRef.current,
            smooth: true
        })

        scroller.on("scroll", ScrollTrigger.update);

        ScrollTrigger.scrollerProxy(scrollRef.current, {
            scrollTop(value) {
                return arguments.length ? scroller.scrollTo(value, { duration: 0, disableLerp: true }) : scroller.scroll.instance.scroll.y;
            },
            getBoundingClientRect() {
                return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
            },

            pinType: scrollRef.current.style.transform ? "transform" : "fixed"
        });

        ScrollTrigger.addEventListener("refresh", () => scroller.update());
        ScrollTrigger.defaults({ scroller: scrollRef.current });

        ScrollTrigger.refresh();
    }, []);

    return (
        <div className="scroll-container" ref={scrollRef}>
            {children}
        </div>
    );
}