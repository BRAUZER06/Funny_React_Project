import React from "react";
import "./Profile.scss";
import { useNavigate } from "react-router";
const Profile = () => {
  const navigate = useNavigate();
  return (
    <div className="profile">
      <h1>
        Здравствуйте, <strong>seve.jobs@example.com</strong>
      </h1>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Выйти
      </button>
    </div>
  );
};

export default Profile;
