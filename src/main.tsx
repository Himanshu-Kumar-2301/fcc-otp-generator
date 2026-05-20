import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import OTPGenerator from "./components/OTPGenerator";
import "./styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <OTPGenerator />
  </StrictMode>,
);
