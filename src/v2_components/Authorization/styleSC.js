import styled from 'styled-components'


export const Form = styled.form`{
  dispay:flex;
  flex-direction:column;

}`
export const Div = styled.div`{
  dispay:flex;
  flex-direction:column;
  text-align: left;
  
}`
const HighdInputButton = styled.input`{
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #232323;
  padding:20px;
  width: 640px;
  hight:60px;
  border-radius: 8px;
  border:inherit;
  margin-bottom:10px;
  padding-bottom:30px;
}`

export const Span = styled.span`{
color:red;
}`
export const P = styled.p`{
  color: #1F1F1F;
  margin-bottom:10px;
  padding-left:2px;
}`



export const Input=styled(HighdInputButton)`{

}`

export const InputBlue =styled(HighdInputButton)`{
  background: #4A67FF;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color:white;
  letter-spacing:0.5px;
  &:disabled{
    background: #95a6ff;
  }
}`

export const DivInputChecbox = styled(Div)`{
 
 
>span{
  

}
  margin-bottom:40px;
}`
export const InputCheckBox = styled.input`{
  width:20px;
  height:20px;
  margin-right:14px;
  
  

}`

