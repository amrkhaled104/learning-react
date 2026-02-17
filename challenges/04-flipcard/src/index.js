import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import FlashCards from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <FlashCards />
  </StrictMode>
);
