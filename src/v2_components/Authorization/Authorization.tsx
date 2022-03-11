import React from "react";
import "./Authorization.scss";
import { useForm } from "react-hook-form";
// import axios from "axios";

import {
  Form,
  Div,
  Input,
  Span,
  P,
  InputBlue,
  DivInputChecbox,
  InputCheckBox,
  DivError,
} from "./styleSC";
import { useNavigate } from "react-router";
type FormData = {
  login: string;
  password: string;
};

const Authorization = () => {
  const navigate = useNavigate();
  const [inputCheckedSaveUser, setInputCheckedSaveUser] = React.useState(false);
  const [inputDisableLoadig, setInputDisableLoadig] = React.useState(false);
  const [errorDivInfo, setErrorDivInfo] = React.useState(false);
  const [inputValue, setInputValue] = React.useState({
    login: "",
    password: "",
  });

  React.useEffect(() => {
    const { login, password } = window.localStorage;
    if (
      window.localStorage.getItem("login") &&
      window.localStorage.getItem("password") &&
      window.localStorage.getItem("saveUser")
    ) {
      setInputValue((prev) => ({ ...prev, login, password }));
      setInputCheckedSaveUser(true);
    } else setInputCheckedSaveUser(false);
  }, []);


  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormData>({
    mode: "onBlur",
  });


  const onSubmit = (data: any) => {
    reset();
  };


  const onClickInputFormDisable = (e: any) => {
    setInputDisableLoadig(true);
    setTimeout(() => {
      //хотел сделать через условный рендеринг, но подумал что так читабельнеe
      if (inputCheckedSaveUser) {
        window.localStorage.setItem("login", inputValue.login);
        window.localStorage.setItem("password", inputValue.password);
        window.localStorage.setItem("saveUser", "true");
        navigate("/profile");
      } else {
        window.localStorage.removeItem("saveUser");
        window.localStorage.setItem("login", inputValue.login);
        window.localStorage.setItem("password", inputValue.password);
      }
      if (inputValue.login !== "steve.jobs@example.com") {
        setErrorDivInfo(true);
      }

      if (
        inputValue.login === "steve.jobs@example.com" &&
        inputValue.password === "password"
      ) {
        navigate("/profile");
      }

      setInputDisableLoadig(false);
    }, 2000);
  };


  const onChangeInputChexbox = (e: any): void => {
    setInputCheckedSaveUser((inputCheckedSaveUser) => !inputCheckedSaveUser);
  };

  const onChangeInputValue = (e: any): void => {
    const { value, name } = e.target;
    setInputValue((prev) => ({ ...prev, [name]: value }));
    setErrorDivInfo(false);
  };






  return (
    <div className="App">
      <div className="noError_checkbox">
        {errorDivInfo && (
          <DivError>
            <span>!</span> <p>Пользователя {inputValue.login} не существует </p>
          </DivError>
        )}
      </div>
      <Form onSubmit={handleSubmit(onSubmit)} className="wrapper">
        <Div className="wrapper_login wrapper_block">
          <P>Логин</P>

          <Input
            {...register("login", {
              required: "Поле обязательное к заполнению",
              minLength: { value: 5, message: "Минимум 5 симолов." },
            })}
            type="text"
            value={inputValue.login}
            onChange={(e) => onChangeInputValue(e)}
          />
          {errors?.login && <Span>{errors?.login?.message || "Error"} </Span>}
        </Div>
        <Div className="wrapper_password wrapper_block">
          <P>Пароль</P>
          <Input
            {...register("password", {
              required: "Обязательное поле",
            })}
            type="password"
            value={inputValue.password}
            onChange={(e) => onChangeInputValue(e)}
          />
          {errors?.password && (
            <Span>{errors?.password?.message || "Error"} </Span>
          )}
        </Div>
        <DivInputChecbox className="wrapper_inputChexbox">
          <InputCheckBox
            type="checkbox"
            checked={inputCheckedSaveUser}
            onChange={(e) => onChangeInputChexbox(e)}
          />
          <span>Запомнить пароль</span>
        </DivInputChecbox>

        <InputBlue
          disabled={inputDisableLoadig}
          onClick={onClickInputFormDisable}
          type="submit"
        />
      </Form>
    </div>
  );
};

export default Authorization;
