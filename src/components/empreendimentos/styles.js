import styled from "styled-components";

export const DevelopmentContainer = styled.div`
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

export const ImoveisContainer = styled.div`
  width: 1130px;
  height: 600px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const Imovel = styled.div`
  box-sizing: border-box;
  width: 500px;
  height: 400px;
  border-radius: 5px;
`;
export const ImovelName = styled.div`
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  width: 100%;
  height: 30px;
  background-color: #326d97;
  color: #f4fafa;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ImovelImage = styled.div`
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  width: 100%;
  img {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    width: 100%;
    height: 100%;
  }
`;

export const Divisor = styled.div`
  box-sizing: border-box;
  width: 0.5px;
  height: 30px;
  background-color: #f4fafa;
`;
