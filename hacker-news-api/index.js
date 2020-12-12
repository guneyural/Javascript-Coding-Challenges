import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import Store from "./redux/store";
import { Provider } from "react-redux";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
