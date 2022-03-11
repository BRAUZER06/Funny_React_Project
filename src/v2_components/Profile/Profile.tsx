import React from "react";
import { useNavigate } from "react-router";
import "./Profile.scss";
import {ButtonExite,UseNameAccoun} from '../Authorization/styleSC'

const Profile = () => {
  const navigate = useNavigate();
  React.useEffect(() => {
    if (!window.localStorage.getItem("login")) {
    }
    if (
      window.localStorage.getItem("login") !== "steve.jobs@example.com" &&
      window.localStorage.getItem("password") !== "password"
    ) {
      alert("Вы не авторизированны ");
      navigate("/authorization");
    }
  }, []);

  const onClickButtonCloseAccount = () => {
    window.localStorage.clear();
    navigate("/authorization");
  };
  const onClickButtonExiteAccount = () => {
    navigate("/authorization");
  };
  return (
    <div>
      <UseNameAccoun>
        Здравтсвуйте, <b>{window.localStorage.getItem("login")}</b>
      </UseNameAccoun>
      <ButtonExite onClick={() => onClickButtonCloseAccount()}>Выйти</ButtonExite>
      {window.localStorage.getItem("saveUser") && (
        <ButtonExite onClick={() => onClickButtonExiteAccount()}>
          Выйти и сохранить данные аккаунта ?
        </ButtonExite>
      )}
    </div>
  );
};

export default Profile;
