import styled from "styled-components";

export const Form = styled.form`
   {
    dispay: flex;
    flex-direction: column;
  }
`;
export const Div = styled.div`
   {
    dispay: flex;
    flex-direction: column;
    text-align: left;
    height: 136px;
  }
`;
export const DivError = styled(Div)`
   {
    border-radius: 8px;

    height: 60px;
    background-color: #f5e9e9;
    padding: 20px;
    color: white;
    margin-bottom: 27px;

    > span {
      background-color: #e26f6f;
      color: #f5e9e9;
      padding: 5px 11px;
      border-radius: 50%;
      margin-right: 14px;
    }
    > p {
      color: black;
      font-size: 18px;
      display: inline-block;
    }
  }
`;
const HighdInputButton = styled.input`
   {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 19px;
    color: #232323;
    padding: 20px;
    width: 640px;
    hight: 60px;
    border-radius: 8px;
    border: inherit;
    margin-bottom: 5px;
  }
`;

export const Span = styled.span`
   {
    color: red;
  }
`;
export const P = styled.p`
   {
    color: #1f1f1f;
    margin-bottom: 10px;
    padding-left: 2px;
  }
`;

export const Input = styled(HighdInputButton)`
   {
  }
`;

export const InputBlue = styled(HighdInputButton)`
   {
    background: #4a67ff;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: white;
    letter-spacing: 0.5px;
    &:disabled {
      background: #95a6ff;
    }
  }
`;

export const DivInputChecbox = styled(Div)`
   {
    padding-left: 9px;
    display: flex;
    flex-direction: row;
    height: 100%;
    margin-bottom: 30px;
    > span {
      display: block;
    }
  }
`;
export const InputCheckBox = styled.input`
   {
    width: 20px;
    border-radius: 50%;
    height: 20px;
    margin-right: 14px;
  }
`;

export const UseNameAccoun = styled.p`{
font-size:30px;
}`

export const ButtonExite = styled.button`{
  margin-top:30px;
  padding:8px 30px;
  color:black;
  background: #F5F5F5;
  border-radius:8px;
  border:inherit;
  margin-left:15px;
}`
