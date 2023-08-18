import "../styles/descriptiveSection.css";
import React from "react";
import { descriptive as data } from "../assets/data";

const DescriptiveSection = () => {
  return (
    <section className="descriptiveSection-section">
      <div className="descriptiveSection-container">
        {data.map(item => <DescriptiveCard data={item} />)}
      </div>
    </section>
  );
};

export default DescriptiveSection;



const DescriptiveCard = ({data}) => (
  <div className="descriptiveSection-cardWrap">
    <img src={data.url} />
    <h2>{data.title} {data.svg }</h2>
    <p>{data.p}</p>
    <div>
      <div className="descriptiveSection-round"></div><span>Learn more about {data.title}</span>
    </div>
  </div>
)