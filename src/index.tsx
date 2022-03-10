import React from "react";
import ReactDOM from "react-dom";
import App from "./App_v1";
import { BrowserRouter  } from "react-router-dom";
import App_v2 from "./App_v2";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <App_v2/> */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
