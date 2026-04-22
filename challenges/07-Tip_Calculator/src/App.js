import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div>
      <TipCalucator />
    </div>
  );
}
function TipCalucator() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);
  function handleReset() {
    setBill("");
    setPercentage1("0");
    setPercentage2("0");
  }
  const tip = Number(bill) * ((percentage1 + percentage2) / 2 / 100);
  return (
    <div className="TipCalucator">
      <Bill bill={bill} setBill={setBill} />
      <Tip service={percentage1} onSetService={setPercentage1}>
        <label>How did you like the service?</label>
      </Tip>

      <Tip service={percentage2} onSetService={setPercentage2}>
        <label>How did your friend like the service?</label>
      </Tip>

      <Paid bill={bill} tip={tip} />

      {Number(bill) > 0 && <Reset onReset={handleReset} />}
    </div>
  );
}
function Bill({ setBill, bill }) {
  return (
    <div className="input-group">
      <label>How Much Was The Bill </label>
      <input
        type="text"
        placeholder="Enter Bill here..."
        value={bill}
        onChange={(e) => setBill(e.target.value)}
      />
    </div>
  );
}

function Tip({ children, service, onSetService }) {
  return (
    <div className="input-group">
      {children}
      <select
        value={service}
        onChange={(e) => onSetService(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="10">It was okay (10%)</option>
        <option value="20">It was amazing! (20%)</option>
      </select>
    </div>
  );
}

function Paid({ bill, tip }) {
  const billNum = Number(bill);
  const total = billNum + tip;

  return (
    billNum > 0 && (
      <p style={{ fontWeight: "bold", fontSize: "20px", marginTop: "20px" }}>
        {`You pay $${total} ($${billNum} + $${tip.toFixed(2)} tip)`}
      </p>
    )
  );
}

function Reset({ onReset }) {
  return (
    <button className="btn-reset" onClick={onReset}>
      Reset
    </button>
  );
}
