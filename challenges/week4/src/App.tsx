import React, { useState } from "react";
import { Modal } from "./Playground/DialogModal";
import { Tabs } from "./Playground/Tabs";
import { Disclosure } from "./Playground/Disclosure";


export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const myTabs = [
    { id: "general", label: "General", content: <p>This is the General settings panel.</p> },
    { id: "security", label: "Security", content: <p>Manage your password and security here.</p> },
    { id: "notifications", label: "Notifications", content: <p>Configure your notification preferences.</p> },
  ];

  return (
    <>
    <div style={{ padding: "40px" }}>
      <h1>Modal Accessibility</h1>
      
      {/* Trigger button */}
      <button onClick={() => setIsModalOpen(true)}>
        Open Modal Dialog
      </button>

      {/* Modal component invocation */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Confirmation Dialog"
      >
        <p>Focus is trapped inside this modal. You cannot tab outside until you close it!</p>
        <input type="text" placeholder="Type something here..." />
      </Modal>
    </div>
    <div style={{ padding: "40px" }}>
    <h1>Tabs Accessibility Playground</h1>
    <Tabs tabs={myTabs} />
  </div>
  <div style={{ padding: "40px" }}>
      <h1>Disclosure Accessibility Playground</h1>
      <Disclosure buttonText="Click to toggle details">
        <p>This is the hidden content inside the disclosure panel. It appears and disappears when you click or press Enter/Space on the button!</p>
        <p>It correctly updates the <code>aria-expanded</code> attribute for screen readers.</p>
      </Disclosure>
    </div>
  </>
  );
}