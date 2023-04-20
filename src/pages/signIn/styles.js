import styled from "styled-components";

export const SignInContainer = styled.div`
  width: 100vmax;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
`;

export const FormContainer = styled.div`
  border: 1px solid black;
  border-radius: 20px;
  background-color: #f4fafa;
  width: 700px;
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const BotaoEntrar = styled.button`
  width: 298px;
  height: 52px;
  box-sizing: border-box;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
  background: #326d97;
  border-radius: 5px;
  font-size: 20px;
  color: white;
`;
export const BotaoNaoTenhoConta = styled.div`
  width: 232px;
  height: 17px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration-line: underline;
  color: #52b6ff;
  margin-top: 25px;
`;
export const Input = styled.input`
  box-sizing: border-box;
  width: 503px;
  height: 70px;
  margin-bottom: 5px;
  background: #ffffff;
  border-radius: 5px;
  border: 1px solid black;
  font-size: 20px;
  padding: 8px;
  ::placeholder {
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 18px;
    color: #949494;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;
