import styled from "styled-components";

export const ContactContainer = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  p {
    font-size: 20px;
    color: black;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 18px;
  div {
    display: flex;
    justify-content: end;
    width: 100%;
  }
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
export const InputText = styled.textarea`
  box-sizing: border-box;
  width: 503px;
  height: 140px;
  margin-bottom: 5px;
  background: #ffffff;
  border-radius: 5px;
  border: 1px solid black;
  padding: 8px;
  font-size: 20px;
  ::placeholder {
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 18px;
    color: #949494;
  }
`;

export const PostButton = styled.button`
  width: 112px;
  height: 31px;
  background: #326d97;
  border-radius: 5px;
  font-size: 20px;
  color: white;
`;
