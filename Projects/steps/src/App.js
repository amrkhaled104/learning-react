import "./index.css";
import { useState } from "react";
const Messages = [" Learn React ⚛️", " Learn JavaScript 🍦", " Get a Job 💼"];

export default function App() {
  const [isopen, setisopen] = useState(true);

  return (
    <>
      <div className="steps" style={isopen ? {} : { display: "none" }}>
        <Steps stepsnumber={3} />
      </div>
      <div className="close" onClick={() => setisopen(prev => !prev)}>
        x
      </div>
    </>
  );
}

function Steps({ stepsnumber }) {
  const [step, setStep] = useState(1);
  const length = Messages.length;

  function handlePrevious() {
    return step > 1 && setStep((s) => s - 1);
  }
  function handleNext() {
    return step < length && setStep((s) => s + 1);
  }
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
          onClick={handlePrevious}
          style={step > 1 ? { backgroundColor: "#7950f2", color: "white" } : {}}
        >
          <span>Previous</span>
        </button>
        <button
          onClick={handleNext}
          style={
            step < length ? { backgroundColor: "#7950f2", color: "white" } : {}
          }
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
