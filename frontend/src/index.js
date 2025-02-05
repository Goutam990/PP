import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Main from "./Main/Main";

// Ensure the environment variable is correctly defined
const serverUrl = process.env.REACT_APP_SERVER_URL;

// Check if the server URL is reachable (optional, for development purposes)
if (!process.env.REACT_APP_SERVER_URL) {
  console.warn("REACT_APP_SERVER_URL is not set. Defaulting to localhost.");
}

// Pass the server URL as a global variable or context if needed
export const REACT_APP_SERVER_URL = serverUrl;

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById("root")
);
