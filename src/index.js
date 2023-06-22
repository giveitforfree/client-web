import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "remixicon/fonts/remixicon.css";
import { createRoot } from "react-dom/client";


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render( 
  <React.StrictMode>
    <Provider store={store}>
      <Router  >
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);