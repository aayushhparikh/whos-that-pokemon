import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";
import { BrowserRouter } from "react-router-dom";
import { GameProvider } from "./Hooks/gameContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GameProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </GameProvider>
  </React.StrictMode>
);
