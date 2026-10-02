import React, { useState, useRef } from "react";

interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: TabItem[];
}

export function Tabs({ tabs }: TabsProps) {
  const [activeTabId, setActiveTabId] = useState(tabs[0]?.id);
  const tabListRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    const tabElements = tabListRef.current?.querySelectorAll('[role="tab"]');
    if (!tabElements) return;

    let nextIndex = index;
    if (e.key === "ArrowRight") {
      nextIndex = (index + 1) % tabs.length;
    } else if (e.key === "ArrowLeft") {
      nextIndex = (index - 1 + tabs.length) % tabs.length;
    } else if (e.key === "Home") {
      nextIndex = 0;
    } else if (e.key === "End") {
      nextIndex = tabs.length - 1;
    } else {
      return;
    }

    e.preventDefault();
    const targetTab = tabElements[nextIndex] as HTMLElement;
    targetTab.focus();
    setActiveTabId(tabs[nextIndex].id);
  };

  return (
    <div>
      {/* Tab List */}
      <div 
        ref={tabListRef} 
        role="tablist" 
        aria-label="Playground Tabs"
        style={{ display: "flex", gap: "10px", borderBottom: "2px solid #ccc", paddingBottom: "5px" }}
      >
        {tabs.map((tab, index) => {
          const isActive = tab.id === activeTabId;
          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${tab.id}`}
              id={`tab-${tab.id}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActiveTabId(tab.id)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              style={{
                padding: "8px 16px",
                background: isActive ? "#007bff" : "#f1f1f1",
                color: isActive ? "#fff" : "#000",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab Panels */}
      {tabs.map((tab) => {
        const isActive = tab.id === activeTabId;
        return (
          <div
            key={tab.id}
            role="tabpanel"
            id={`panel-${tab.id}`}
            aria-labelledby={`tab-${tab.id}`}
            hidden={!isActive}
            style={{ padding: "20px 0" }}
          >
            {tab.content}
          </div>
        );
      })}
    </div>
  );
}