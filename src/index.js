import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./css/Sizes.css";
import "./css/Animation.css";
import "react-toastify/dist/ReactToastify.css";

import "./css/animations/flip-in-hor-bottom.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
