import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { render } from "react-dom";
import App from "./App";
import App1 from "./App1";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
