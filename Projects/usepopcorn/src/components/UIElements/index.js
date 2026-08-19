import { useState } from "react";

function Loader() {
  return <p className="loader">Loading...</p>;
}

function ErrorMessage({ message }) {
  return (
    <p className="error">
      <span>⛔️</span> {message}
    </p>
  );
}

function ButtonCollapse({ isOpen, setIsOpen }) {
  return (
    <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
      {isOpen ? "–" : "+"}
    </button>
  );
}

function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="box">
      <ButtonCollapse isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && <>{children}</>}
    </div>
  );
}

export { Loader, ErrorMessage, ButtonCollapse, Box };
