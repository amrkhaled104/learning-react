import React, { useState } from "react";

interface DisclosureProps {
  buttonText: string;
  children: React.ReactNode;
}

export function Disclosure({ buttonText, children }: DisclosureProps) {
  const [isOpen, setIsOpen] = useState(false);
  const contentId = "disclosure-content";

  return (
    <div style={{ border: "1px solid #ccc", borderRadius: "6px", margin: "10px 0", width: "300px" }}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={contentId}
        style={{
          width: "100%",
          padding: "10px 15px",
          background: "#f7f7f7",
          border: "none",
          textAlign: "left",
          cursor: "pointer",
          fontWeight: "bold",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <span>{buttonText}</span>
        <span>{isOpen ? "▲" : "▼"}</span>
      </button>

      {/* Collapsible Content */}
      <div
        id={contentId}
        hidden={!isOpen}
        style={{ padding: "15px", background: "#fff" }}
      >
        {children}
      </div>
    </div>
  );
}