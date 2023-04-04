import styled from "styled-components";

export const DestaquesContainer = styled.div`
  box-sizing: border-box;
  width: 100vmax;
  height: 550px;
  background-color: #f4fafa;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    margin-top: 50px;
    color: #326d97;
    margin-bottom: 50px;
    font-size: 30px;
  }
`;

export const ImovelContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  margin-top: 10px;
  width: 1130px;
  height: 350px;

  border-radius: 5px;
`;
export const ImovelImage = styled.div`
  width: 700px;
  height: 100%;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;

  img {
    width: 100%;
    height: 100%;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
`;
export const ImovelSideBar = styled.div`
  box-sizing: border-box;
  padding: 10px;
  width: 430px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  background-color: #326d97;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  h1 {
    color: #f4fafa;
    font-size: 34px;
  }
  h2 {
    color: #f4fafa;
    font-size: 20px;
  }
`;
