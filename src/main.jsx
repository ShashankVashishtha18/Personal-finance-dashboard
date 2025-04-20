import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// This import runs your firebase.js module and initializes Auth/Firestore/Analytics
import "./services/firebase";

// Grab the root DOM node
const container = document.getElementById("root");

// Create a root and render your app
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
