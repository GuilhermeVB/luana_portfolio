import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import Scrollbar from "smooth-scrollbar";

gsap.registerPlugin(ScrollTrigger)

export const SmoothScroll = ({ children }) => {
    const scrollRef = useRef(null);

    useGSAP(() => {
        const scroller = Scrollbar.init(scrollRef.current, {
            damping: 0.08,
            delegateTo: document
        });

        /* Ta Sendo ignorado na build por algum motivo */

        ScrollTrigger.scrollerProxy(scrollRef.current, {
            scrollTop(value) {
                if (arguments.length) {
                    scroller.scrollTop = value;
                }
                return scroller.scrollTop;
            }
        });

        scroller.addListener(ScrollTrigger.update);
        ScrollTrigger.defaults({ scroller: scrollRef.current });

        if (document.querySelector('.gsap-marker-scroller-start')) {
            const markers = gsap.utils.toArray('[class *= "gsap-marker"]');

            scroller.addListener(({ offset }) => {
                gsap.set(markers, { marginTop: -offset.y })
            });
        }
    }, []);

    return (
        <div className="scroll-container" ref={scrollRef}>
            {children}
        </div>
    );
}