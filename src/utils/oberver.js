import { useEffect, useRef, useState } from "react";

export const useObserver = (options = {}) => {
    const [isVisible, setIsVisible] = useState(false);
    const element = useRef()

    useEffect(() => {
        let cb = ([entry]) => {
            if (entry.isIntersecting){
                observer.unobserve(entry.target)
                console.log(entry.target)
                setIsVisible(true)
            }
        }
        const observer = new IntersectionObserver(cb, options)
        observer.observe(element.current)
    
      
    }, [])
    
    return [isVisible, element]
}