import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";

import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "remixicon/fonts/remixicon.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router  >
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
