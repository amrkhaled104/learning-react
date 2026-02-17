import "./styles.css";
import { useState } from "react";

const questions = [
  {
    id: 1,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 2,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 3,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX (JavaScript XML)",
  },
  {
    id: 4,
    question: "How to pass data from parent to child components?",
    answer: "Via props",
  },
  {
    id: 5,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 6,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

export default function FlashCards() {
  const [selectedId, setSelectedId] = useState(null);
  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null);
  }
  return (
    <div className="FlashCards">
      {questions.map((card) => (
        <Card
          question={card.question}
          answer={card.answer}
          key={card.id}
          showAnswer={card.id === selectedId}
          onSelectCard={() => handleClick(card.id)}
        />
      ))}
    </div>
  );
}
function Card({ question, answer, showAnswer, onSelectCard }) {
  return (
    <div className="Card" onClick={onSelectCard}>
      <div
        className="question"
        style={
          showAnswer
            ? { transform: "rotateY(180deg)" }
            : {
                backgroundColor: "rgba(128, 128, 128, 0.348)",
                color: "black",
              }
        }
      >
        {question}
      </div>
      <div
        className="answer"
        style={
          !showAnswer
            ? { transform: "rotateY(180deg)" }
            : {
                backgroundColor: "red",
                color: "white",
              }
        }
      >
        {answer}
      </div>
    </div>
  );
}
