import "../styles/rollingAd.css";
import React from "react";
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
        <Swiper property={property} >
          <h1>1</h1>
          <h1>2</h1>
          <h1>3</h1>
          <h1>4</h1>
          <h1>5</h1>
          <h1>6</h1>
          <h1>7</h1>
          <h1>8</h1>
          <h1>9</h1>
          <h1>10</h1>
          <h1>11</h1>
          <h1>12</h1>
          <h1>13</h1>
          <h1>14</h1>
          <h1>15</h1>
          <h1>16</h1>
          <h1>17</h1>
        </Swiper>
      </div>
    </section>
  );
};

export default RollingAd;
