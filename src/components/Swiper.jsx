import React, { useEffect, useRef, useState } from "react";

function Swiper({ property, children }) {
  const [currProperty, setCurrProperty] = useState(getCurrProperties());
  const containerRef = useRef();
  
  
  const { cardsOnScreen, cardsSlidingOut, transition, gap } = currProperty
  
  function getCurrProperties() {
    let windowWidth = window.innerWidth;
    for (let spec of [...property].reverse()) {
      if ("maxWidth" in spec && windowWidth <= spec.maxWidth) {
        console.log("windowWidth <= spec.width")
        return spec;
      }
    }
    return property[0];
  }

  const handleResize = (() => {
    let callerID;
    return function () {
      clearTimeout(callerID);
      callerID = setTimeout(() => {
        setCurrProperty(getCurrProperties());
      }, 100);
    };
  })();
  
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  
  useEffect(() => {
    let pos = 0;
    const timerId = setInterval(() => {
      
      pos += cardsSlidingOut
      containerRef.current.style.transition = `all ${transition}ms`;
      containerRef.current.style.translate =
      `-${(100 / cardsOnScreen) * pos}% 0`;
      
      setTimeout(() => {
        containerRef.current.style.transition = "none";
        if (pos >= children?.length) {
          
          pos = (pos) % children?.length
          
          containerRef.current.style.translate =
          `-${(100 / cardsOnScreen) * pos}% 0`;
        }
        
      }, transition)
      
    }, gap + transition);
    
    return () => clearInterval(timerId);
  }, [currProperty]);
  
  const totalSlides =  children?.length + cardsOnScreen + children?.length % cardsSlidingOut
  
  let CONTAINER_STYLE = {
    display: "flex",
    flexWrap: "nowrap",
  };
  
  const CHILD_STYLE = {
    width: 100 / cardsOnScreen + "%",
    flexShrink: 0,
  };

  return (
    <div style={{ overflowX: "hidden" }}>
      <div style={CONTAINER_STYLE} ref={containerRef}>
        {children && new Array(totalSlides)
          .fill()
          .map((_, i) => (
            <div key={i} style={CHILD_STYLE}>
              {children[i % children.length]}
            </div>
          ))}
      </div>
    </div>
  );
}

export default Swiper;
