import { useState } from "react";

export function TextExpander({
  children,
  collapsedNumWords = 10,
  className = "",
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  buttonColor = "blue",
  expanded = false,
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);

  const displayText = isExpanded
    ? children
    : children.split(" ").slice(0, collapsedNumWords).join(" ") + "...";

  function handleToggle() {
    setIsExpanded((exp) => !exp);
  }

  return (
    <div className={className}>
      <span>{displayText}</span>
      <ButtonControl color={buttonColor} onClick={handleToggle}>
        {isExpanded ? collapseButtonText : expandButtonText}
      </ButtonControl>
    </div>
  );
}

function ButtonControl({ children, color, onClick }) {
  const btnStyle = {
    color: color,
    cursor: "pointer",
    marginLeft: "6px",
    fontWeight: "bold",
    border: "none",
    background: "none",
    padding: 0,
    font: "inherit",
  };

  return (
    <button style={btnStyle} onClick={onClick}>
      {children}
    </button>
  );
}
