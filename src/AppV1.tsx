import React from "react";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";

import Authorization from "./v1_components/Authorization/Authorization";
import Profile from "./v1_components/Profile/Profile";

function AppV1() {
  return (
    <div className="App">
      <ONLY />
      <Routes>
        <Route path="/Authorization" element={<Authorization />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

const ONLY:React.FC = () => {
  const navigate = useNavigate();
  const onClickOnlyPage = () => {
    navigate("/Authorization");
  };
  return (
    <div onClick={onClickOnlyPage} className="only">
      ONLY.
    </div>
  );
};

export default AppV1;
