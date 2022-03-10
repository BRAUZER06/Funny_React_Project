import React from "react";
import "./Authorization.scss";
import { useForm } from "react-hook-form";


import { Form, Div, Input, Span, P, InputBlue, DivInputChecbox,InputCheckBox } from "./styleSC";

type FormData = {
  login: string;
  password: string;
};
const Authorization = () => {
  const [inputChecked, setInputChecked] = React.useState(false);
  const [inputSubmitDisable, setInputSubmitDisable] = React.useState(false);
  const [loading, setLoadin]=React.useState(false)
  const [ inputValue, setInputValue]=React.useState({login:'', password:''})



React.useEffect(()=>{
  const { login, password } = window.localStorage;
if(window.localStorage.getItem('login') && (window.localStorage.getItem('password')) && (window.localStorage.getItem('saveUser'))){
  setInputValue((prev) => ({ ...prev, login, password }));
  setInputChecked(true)
}
},[])





  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<FormData>({
    mode: "onBlur",
  });

const onChangeChexbox=(e:any)=>{
  setInputChecked(e.target.checked)
}
const onClickInputFormDisable=(e:any)=>{
  

setInputSubmitDisable(true)
  if(inputValue.login === "steve.jobs@example.com" &&
  inputValue.password === "password"){
    setInputSubmitDisable(false)
      setTimeout(()=>{
        setInputSubmitDisable(true)
      },2000)
      }
}
const onChangeInputValue =(e:any)=>{
  const{value,name}=e.target
setInputValue({...inputValue, [name]:value})

}








  const onSubmit = (data: any) => {
    console.log(JSON.stringify(data));
    
    reset();
  };

  return (
    <div className="App">
      <div className="error">Пользователя {} не существует </div>
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
            onChange={(e)=>onChangeInputValue(e)}
          />
          {errors?.login && <Span>{errors?.login?.message || "Error"} </Span>}

          <span></span>
        </Div>
        <Div className="wrapper_password wrapper_block">
          <P>Пароль</P>
          <Input
            {...register("password", {
              required: "Поле обязательное к заполнению",
            })}
            type="password"
            value={inputValue.password}
            onChange={(e)=>onChangeInputValue(e)}
          />
          {errors?.password && (
            <Span>{errors?.password?.message || "Error"} </Span>
          )}

          <span></span>
        </Div>
        <DivInputChecbox className="wrapper_inputChexbox">
          <InputCheckBox type="checkbox" checked={inputChecked} onChange={(e)=>onChangeChexbox(e)} /> <span>Запомнить пароль</span>
        </DivInputChecbox>

        <InputBlue disabled={loading}  onClick={onClickInputFormDisable} type="submit" />
      </Form>
    </div>
  );
};

export default Authorization;
