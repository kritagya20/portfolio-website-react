import { useEffect, useState, useRef} from "react";


export const useElementOnScreen = (options) => {
    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const callbackFunction = (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
    }

    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction, options);
        if(containerRef.current) observer.observe(containerRef.current);

        return () => {
            if(containerRef.current) observer.unobserve(containerRef.current);
        }    
    }, [containerRef, options]);

    return [ containerRef, isVisible]    
}