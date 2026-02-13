import "./styles.css";
import { useState } from "react";
export default function App() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + count);
  return (
    <>
      <div className="Step">
        <button onClick={() => setStep((s) => s - 1)}>-</button>
        Step:{step}
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>
      <div className="Count">
        <button onClick={() => setCount((s) => s - step)}>-</button>
        Count:{count}
        <button onClick={() => setCount((s) => s + step)}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is ${" "}`
            : `${Math.abs(count)} days ago was${" "}`}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </>
  );
}
