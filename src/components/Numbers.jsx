import React, { useState, useEffect } from "react";
import "../styles/numbers.css";
import { useObserver } from "../utils/oberver";

const data = [
  {
    num: 95,
    text: "Same Day Order Fulfillment",
  },
  // {
  //   num: 99.9,
  //   text: "Fulfilled Order Accuracy",
  // },
  // {
  //   num: 4.7,
  //   text: "Customer Review Rating",
  // },
]

const Numbers = () => {
  const [isVisible, numberRef] = useObserver({ threshold : 1});

  return (
    <section className="numbers-section">
      <div className="numbers-container" ref={numberRef}>
        {data.map((item) => <NumbersCard {...item} isVisible={isVisible} />)}
      </div>
    </section>
  );
};

export default Numbers;


const NumbersCard = ({ num, text , isVisible }) => (
  <div className="numbers-card" >
    <RunningNumber number={num} isVisible={isVisible} />
  </div>
);

const RunningNumber = ({number, isVisible, duration = 1000, frequency = 50}) => {
  console.log(number, isVisible, duration)                                                                                                                  
  
  const numInString = typeof number === 'number' ? number.toString() : '0'
  const components = numInString.split('.')
  
  let initialValue = '0'.repeat(components[0].length)
  
  if (components.length == 2) {
    initialValue += '.' + '0'.repeat(components[1].length)
  }
  
  
  const [runner, setRunner] = useState(initialValue);
  
  useEffect(() => {
    if (isVisible) {
      let divisor = duration / frequency;
      let delta = (number / divisor).toString().slice(0, initialValue.length);
      
      const callRunner = setInterval(() => {
        
        setRunner(prev => {
          if (Number(prev) + Number(delta) >= number) {
            clearInterval(callRunner)
            return number
          } else
          return (Number(prev) + Number(delta))
        })
      }, frequency)
      
      return () => {
        clearInterval(callRunner)
      }
    }
  }, [isVisible])
  
  
  return <>{ runner }</>
}