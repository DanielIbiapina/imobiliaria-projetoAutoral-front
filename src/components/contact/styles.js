import styled from "styled-components";

export const ContactContainer = styled.div`
  width: 1000px;
  margin-top: 72px;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
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
  background: #efefef;
  border-radius: 5px;
  ::placeholder {
    font-family: "Lato";
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 18px;
    color: #949494;
  }
`;
export const InputText = styled.input`
  box-sizing: border-box;
  width: 503px;
  height: 66px;
  margin-bottom: 5px;
  background: #efefef;
  border-radius: 5px;
  ::placeholder {
    font-family: "Lato";
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 18px;
    color: #949494;
  }
`;

export const PostButton = styled.button`
  width: 112px;
  height: 31px;
  background: #326d97;
  border-radius: 5px;
`;
