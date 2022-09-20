import React from "react";
import ReactDOM from "react-dom/client";
import { store } from "./Store/Store";
import { Provider } from "react-redux";
import App from "./App";
import axios from "axios";

axios.defaults.baseURL = "https://take-note.onrender.com/";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
