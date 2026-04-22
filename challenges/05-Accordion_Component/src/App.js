import "./styles.css";
import { useState } from "react";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi sed.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, animi natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, sapiente nemo hic delectus id illo ducimus voluptas explicabo unde natus cum sit.",
  },
];
export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [curOpen, setCurOpren] = useState(null);
  return (
    <div className="accordion">
      {data.map((item, i) => (
        <Item
          title={item.title}
          id={i}
          setCurOpren={setCurOpren}
          curOpen={curOpen}
        >
          <p>{item.text}</p>
        </Item>
      ))}
    </div>
  );
}

function Item({ title, id, curOpen, setCurOpren, children }) {
  const isOpen = curOpen === id;
  function handlecuropen() {
    setCurOpren(isOpen ? null : id);
  }
  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handlecuropen}>
      <p className="number">{id < 9 ? `0${id + 1}` : id + 1}</p>
      <p className="title">{title}</p>
      <div className="icon">{isOpen ? "-" : "+"}</div>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
