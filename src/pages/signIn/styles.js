import styled from "styled-components";

export const BodyLogin = styled.div`
  width: 100vmax;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BotaoEntrar = styled.button`
  width: 298px;
  height: 52px;
  background: #ff4791;
  border-radius: 8px;
  box-sizing: border-box;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 20.976px;
  line-height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  margin-top: 8px;
`;
export const BotaoNaoTenhoConta = styled.div`
  width: 232px;
  height: 17px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 13.976px;
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
  width: 303px;
  height: 45px;
  margin-bottom: 16px;
  background: #ffffff;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  padding-left: 5px;
  ::placeholder {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #7e7e7e;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;
