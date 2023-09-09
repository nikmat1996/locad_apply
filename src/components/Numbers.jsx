import "../styles/numbers.css";
import { useObserver } from "../utils/oberver";
import RunningNumber from "./RunningNumber";

const data = [
  {
    num: 95,
    text: "Same Day Order Fulfillment",
    extra: '%+'
  },
  {
    num: 99.93,
    text: "Fulfilled Order Accuracy",
    extra: '%'
  },
  {
    num: 4.7,
    text: "Customer Review Rating",
    extra: '/5'
  },
]

const Numbers = () => {
  const [isVisible, numberRef] = useObserver({ threshold : 0.5});

  return (
    <section className="numbers-section">
      <div className="numbers-container" ref={numberRef}>
        {data.map((item) => <NumbersCard {...item} isVisible={isVisible} />)}
      </div>
    </section>
  );
};

export default Numbers;


const NumbersCard = ({ num, text, extra, isVisible }) => (
  <article className="numbers-card" >
    <div>
      <strong>
        <RunningNumber number={num} isStarting={isVisible} />
      </strong>
      <span>{ extra }</span>
    </div>
    <p>{ text }</p>
  </article>
);