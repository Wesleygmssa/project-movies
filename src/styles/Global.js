import styled, { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
:root {
  --primaryColor: #C3073F;
  --primaryDarkColor: #1A1A1D;
  --successColor:  #e6fffa;
  --infoColor: #0197f6;
  --errorColor: #c53030;
  --warningColor: #F2AF29;

}
  *{
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
  }

  body{
    font-family: sans-serif;
    background: var(--primaryDarkColor);

  }

  html, body, #root{
    height: 100%;
  }
  button{
    cursor: pointer;
    background: var(--primaryColor);
    border: none;
    color: #fff;
    padding: 10px 20px;
    border-radius: 24px;
    font-weight: 700;
  }

  a{
    text-decoration: none;
    color: var(--primaryColor);

  }

  ul{
    list-style: none;
  }

  body .Toastify .Toastify_toast-container .Toastify__toast--success{
    background: var(--successColor)
  }

  body .Toastify .Toastify_toast-container .Toastify__toast--error{
    background: var(--errorColor)
  }
`;

export const Container = styled.div`
  max-width: 560px;
  background: #fff;
  margin: 30px auto;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
