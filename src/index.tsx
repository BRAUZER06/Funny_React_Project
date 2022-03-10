import React from "react";
import ReactDOM from "react-dom";
import AppV1 from "./AppV1";
import { BrowserRouter } from "react-router-dom";
import AppV2 from "./AppV2";
import styled, { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
}
`
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Global/>
        <AppV2 />
      
      {/* <AppV1 /> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
