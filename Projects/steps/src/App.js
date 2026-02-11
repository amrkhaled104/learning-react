import "./index.css";
import { useState } from "react";
const Messages = [" Learn React ⚛️", " Learn JavaScript 🍦", " Get a Job 💼"];

export default function App() {
  return (
    <div className="steps">
      <Steps stepsnumber={3} />
    </div>
  );
}

function Steps({ stepsnumber }) {
  const [step, setStep] = useState(1);
  const length = Messages.length;

  return (
    <>
      <div className="numbers">
        {Array.from({ length: stepsnumber }, (_, i) => {
          const stepNum = i + 1;
          return (
            <Step
              key={i}
              content={i + 1}
              active={stepNum <= step}
              onStepClick={() => setStep(stepNum)}
            />
          );
        })}
      </div>

      <p className="message">
        {" "}
        Step {step}:{Messages[step - 1]}
      </p>

      <div className="buttons">
        <button
          onClick={() => step > 1 && setStep(step - 1)}
          style={{ backgroundColor: "#7950f2", color: "white" }}
        >
          <span>Previous</span>
        </button>
        <button
          onClick={() => step < length && setStep(step + 1)}
          style={{ backgroundColor: "#7950f2", color: "white" }}
        >
          <span>Next</span>
        </button>
      </div>
    </>
  );
}

function Step({ content, active, onStepClick }) {
  return (
    <div className={active ? "active" : ""} onClick={onStepClick}>
      {content}
    </div>
  );
}
