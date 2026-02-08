
## Project Setup & Architecture

- **The Entry Point:** `index.js` is the heartbeat of the app. It connects your React code to the real HTML `div#root`.
- **Strict Mode (`<React.StrictMode>`):** A development tool that renders components twice to find bugs and ensure code is clean
- **Declarative UI:** Unlike Vanilla JS (Imperative), in React we describe **what** the UI should look like based on data, and React handles the **how** (DOM updates)

## Components: The Building Blocks 
- **Concept:** Components are independent, reusable pieces of the UI.
 - **Pure Functions:** A component should ideally be a pure function—it takes input (props) and returns output (JSX)
 - **The Capitalization Rule:** React components **must** start with an uppercase letter to distinguish them from regular HTML tags 

## JSX (JavaScript XML)

 - **Babel's Role:** Browsers can't read JSX. Babel transpiles it into `React.createElement()` calls.
 - **JavaScript Integration:** Any valid JS expression can be used inside JSX using curly braces `{}`.

## Props
- **Mechanism:** The primary way to pass data from a **Parent** component to a **Child** component.
- **The Immutable Rule:** Props are **Read-Only**. A child component should never attempt to change the props it receives
- **One-Way Data Flow:** Data always flows down. This makes the application easier to debug and understand
- **Destructuring:** Modern practice to clean up code: `function Pizza({ name, price })` instead of `props`.

## Rendering Lists & The Key Prop
 - **Mapping:** The `.map()` method is the standard way to transform an array of data into a list of JSX elements
 - - **The Key Prop:**
    - **Purpose:** Provides a stable identity to each element.
        
    - **Why?** It allows React to identify which items changed, were added, or removed, optimizing DOM performance.
        
    - **Warning:** Avoid using the array index as a key if the list can change/reorder.

## Conditional Rendering Logic
 -  **Short-circuiting (`&&`):** Best for "If this is true, show this; otherwise, show nothing.
 - **Ternary Operator (`condition ? x : y`):** Best for choosing between two different UI states.
 - - **Multiple/Early Returns:** Best for returning an entirely different piece of JSX (e.g., a "Store Closed" message) before the main component logic runs.
## Dynamic Styling
 -  **Template Literals:** Using backticks `` ` `` to combine static and dynamic classes.
 -  **Example:** `className={`pizza ${soldOut ? "sold-out" : ""}`}`
 -  This allows the UI to visually react to the data (e.g., graying out a sold-out pizza).
## React Fragment
-  **Purpose:** Groups multiple elements without adding an extra `<div>` to the HTML.
- - **Why?:** Keeps the DOM clean and prevents breaking CSS Flexbox/Grid layouts.
- **Syntax:** * `<> ... </>` (Short version - most common).
-  `<React.Fragment key={...}>` (Use this if you need to pass a **Key** during a `.map()`).