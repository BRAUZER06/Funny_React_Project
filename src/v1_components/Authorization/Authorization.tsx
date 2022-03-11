import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import "./Authorization.scss";

// я Плохо еще знаю TypeScript
// данный проект просто набросок, я сделал его чисто ради интереса
// с миним. использованием бибилиотек
// p.s. код говно и вообще не надо это чекать
interface InputValueInterface {
  login: string;
  password: string;
}

const Authorization = () => {
  const navigate = useNavigate();

  const [isDisabled, setIsDisabled] = React.useState<boolean>(false);
  const [valueInput, setValueInput] = React.useState<InputValueInterface>({
    login: "",
    password: "",
  });
  const [loginValid, setLoginValid] = React.useState<boolean>(false);
  const [passwordValid, setPasswordValid] = React.useState<boolean>(false);
  const [inpuChecked, setInputChecked] = React.useState<boolean>(false);
  const [errorSearchUser, setErrorSeatchUser] = React.useState<boolean>(false);

  useEffect(() => {
    const { login, password } = window.localStorage;

    if (
      window.localStorage.getItem("login") &&
      window.localStorage.getItem("password")
    ) {
      setValueInput((prev) => ({ ...prev, login, password }));
    }
  }, []);

  const onClickGetForm: React.MouseEventHandler<HTMLInputElement> = (
    e: any
  ) => {
    e.preventDefault();

    if (
      valueInput.login === "steve.jobs@example.com" &&
      valueInput.password === "password"
    ) {
      setIsDisabled(true);
      setTimeout(() => {
        if (inpuChecked) {
          window.localStorage.setItem("login", valueInput.login);
          window.localStorage.setItem("password", valueInput.password);
        }
        setIsDisabled(false);
        setValueInput({ login: "", password: "" });
        navigate("/profile");
      }, 2000);
    } else if (valueInput.login === "" || valueInput.password === "") {
      if (valueInput.login === "") {
        setLoginValid(true);
        setErrorSeatchUser(true);
      }
      if (valueInput.password === "") {
        setPasswordValid(true);
      }
    } else {
      setErrorSeatchUser(true);
    }

  };

  const onChangeInput: React.ChangeEventHandler<HTMLInputElement> = (
    e: any
  ) => {
    setValueInput({ ...valueInput, [e.target.name]: e.target.value });

    setTimeout(() => {
      if (e.target.name === "login") {
        setLoginValid(false);
      }
      if (e.target.name === "password") {
        setPasswordValid(false);
      }
    }, 2000);
    setErrorSeatchUser(false);
  };
  const onChangeInputChecked: React.ChangeEventHandler<HTMLInputElement> = (
    e: any
  ) => {
    setInputChecked(e.target.checked);
  };

  return (
    <div>
      <div className="authorization">
        <div
          className={
            errorSearchUser
              ? "authorization_error authorization_block"
              : "authorization_noterror authorization_block"
          }
        >
          <i></i>{" "}
          <p>
            Пользователь <b style={{ fontSize: 17 }}>{valueInput.login}</b> не
            существует{" "}
          </p>
        </div>
        <form className={"authorization_form"}>
          <div className="authorization_form_login authorization_block">
            <p>Логин</p>
            <input
              value={valueInput.login}
              onChange={(e) => onChangeInput(e)}
              name="login"
              placeholder="Логин.."
            />
            {loginValid && (
              <span className="authorization_form_validInput">
                Обязательное поле
              </span>
            )}
          </div>
          <div className="authorization_form_password authorization_block">
            <p>Пароль</p>
            <input
              value={valueInput.password}
              onChange={(e) => onChangeInput(e)}
              name="password"
              placeholder="Пароль.."
            />
            {passwordValid && (
              <span className="authorization_form_validInput">
                Обязательное поле
              </span>
            )}
          </div>
          <div className="authorization_form_checkbox authorization_block">
            <input onChange={(e) => onChangeInputChecked(e)} type="checkbox" />{" "}
            <p>Запомнить пароль</p>
          </div>

          <input
            onClick={onClickGetForm}
            className="authorization_form_button authorization_block "
            value="Войти "
            type="submit"
            disabled={isDisabled}
          />
        </form>
      </div>
    </div>
  );
};

export default Authorization;
