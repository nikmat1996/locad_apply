import React from "react";
import tracking01 from "../assets/tracking01.webp";
import tracking02 from "../assets/tracking02.webp";
import tracking03 from "../assets/tracking03.webp";
import "../styles/trackingSection.css";

const TrackingSection = () => {
  return (
    <section>
      <FeaturesContainer>
        <Features_ImageWrap url={tracking01}/>
        <Features_TextWrap>
          <h2>All Systems Go.</h2>
          <p>
            Locad provides flexible fulfillment services for e-commerce
            businesses of any size, from warehousing to delivery.
          </p>
          <p>Our smart fulfillment networks handle it all.</p>
          <p>
            Store {">"} Pack {">"} Ship {">"} Track
          </p>
          <div className="spanWrap">
            <div className="descriptiveSection-round"></div>
            <span>Learn more about </span>
          </div>
        </Features_TextWrap>
      </FeaturesContainer>

      <FeaturesContainer>
        <Features_ImageWrap url={tracking02}/>
        <Features_TextWrap>
          <h2>COMPLETE INVENTORY CONTROL</h2>
          <p>
            The Locad Control Tower platform provides complete inventory
            visibility across multiple channels and automates distribution so
            you know it’s in stock and you know when it gets to your customer.
          </p>
          <div className="spanWrap">
            <div className="descriptiveSection-round"></div>
            <span>Learn more about </span>
          </div>
        </Features_TextWrap>
      </FeaturesContainer>

      <FeaturesContainer>
        <Features_ImageWrap url={tracking03}/>
        <Features_TextWrap>
          <h2>Shorten Delivery Miles</h2>
          <p>
            Locad has a growing global network of warehouses and transport
            providers that ensure products are delivered fast and well.
          </p>
          <div className="spanWrap">
            <div className="descriptiveSection-round"></div>
            <span>Learn more about </span>
          </div>
        </Features_TextWrap>
      </FeaturesContainer>
    </section>
  );
};

export default TrackingSection;

const FeaturesContainer = ({ children }) => (
  <div className="featuresContainer">{children}</div>
);

const Features_TextWrap = ({ children }) => (
  <div className="featuresContainer-textWrap">
    <div>{children}</div>
  </div>
);

const Features_ImageWrap = ({ url }) => (
  <div className="featuresContainer-imageWrap">
    <img src={url} />
  </div>
);
