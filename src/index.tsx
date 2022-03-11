import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import  { createGlobalStyle } from "styled-components";
import App from "./App";

const Global = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
}
`;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Global />

      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
