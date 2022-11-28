import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Darkmode } from "./Components/Darkmode";
import { UseCity } from "./UseCity";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Darkmode>
        <UseCity>
          <App />
        </UseCity>
      </Darkmode>
    </BrowserRouter>
  </React.StrictMode>
);

// reportWebVitals();
