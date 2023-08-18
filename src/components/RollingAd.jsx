import React from "react";
import { companies as images } from "../assets/data.jsx";
import "../styles/rollingAd.css";
import Swiper from "./Swiper";

const property = [
  {
    cardsOnScreen: 6,
    cardsSlidingOut: 2,
    transition: 5000,
    gap: 2000,
  },
  {
    maxWidth: 760,
    cardsOnScreen: 1,
    cardsSlidingOut: 1,
    transition: 5000,
    gap: 2000,
  },
];

const RollingAd = () => {
  return (
    <section className="rollingAd-section">
      <div className="rollingAd-container">
        <Swiper property={property}>
          {images.map((image) => (
            <figure className="rollingAd-figure">
              <img src={image.imgUrl} alt="company logo" />
            </figure>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default RollingAd;
