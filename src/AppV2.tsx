import React from "react";
import "./App.css";
import Authorization from "./v2_components/Authorization/Authorization";
import Profile from "./v2_components/Profile/Profile";

import { Routes, Route, useNavigate } from "react-router-dom";
import styled from "styled-components";
const AppV2 = () => {
  return (
    <div className="App">
      <Only />
      <Routes>
        <Route path="/authorization" element={<Authorization />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

const Only: React.FC = () => {
  const StyledTitle = styled.div`
     {
      font-size: 100px;
      font-wight: 600;
    }
  `;

  const navigate = useNavigate();
  const onClickOnlyPage = () => {
    navigate("/Authorization");
  };
  return (
    <StyledTitle onClick={onClickOnlyPage} className="only">
      ONLY.
    </StyledTitle>
  );
};

export default AppV2;
