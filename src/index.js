import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

// import { Provider } from "react-redux";
// import { store } from "./store/store";

import { BldgStateContext } from "./BldgStateContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <BldgStateContext>
        <App />
      </BldgStateContext>
    </BrowserRouter>
  </StrictMode>
);
