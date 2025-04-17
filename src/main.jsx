// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// This import runs your firebase.js module and initializes Auth/Firestore/Analytics
import "./services/firebase";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
