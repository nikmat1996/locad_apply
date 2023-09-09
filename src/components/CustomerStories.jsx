import React from "react";
import "../styles/customerStories.css";
import img1 from '../assets/stories1.webp'
import img2 from '../assets/stories2.webp'
import img3 from '../assets/stories3.webp'
import { useObserver } from "../utils/oberver";

const CustomerStories = () => {
  const [visible, elemRef] = useObserver()

  return (
    <section className="customerStories">
      <h2>Customer Stories</h2>
      <article className="customerStories-container" ref={elemRef}>
        <div className={`customerStories-card ${visible ? "customerStories-card-visible" : ""}`}>
          <img src={img1} />
          <p>
            Now with Locad, we are able to dispatch orders within 24 hours and
            deliver super fast shipping to our customers
          </p>
          <h3>Terry SA (Havaianas), Philippines</h3>
        </div>
        <div className={`customerStories-card ${visible ? "customerStories-card-visible" : ""}`}>
          <img src={img2} />
          <p>
            Now with Locad, we are able to dispatch orders within 24 hours and
            deliver super fast shipping to our customers
          </p>
          <h3>Terry SA (Havaianas), Philippines</h3>
        </div>
        <div className={`customerStories-card ${visible ? "customerStories-card-visible" : ""}`}>
          <img src={img3} />
          <p>
            Now with Locad, we are able to dispatch orders within 24 hours and
            deliver super fast shipping to our customers
          </p>
          <h3>Terry SA (Havaianas), Philippines</h3>
        </div>
      </article>
    </section>
  );
};

export default CustomerStories;
