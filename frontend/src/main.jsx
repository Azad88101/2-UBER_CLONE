import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import User_context from "./Context/User_context.jsx";
import Captain_context from "./Context/Captain_context.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Captain_context>
      <User_context>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </User_context>
    </Captain_context>
  </StrictMode>
);
