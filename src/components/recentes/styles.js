import styled from "styled-components";

export const RecentesContainer = styled.div`
  width: 100vmax;
  height: 700px;
  background-color: #f4fafa;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  p {
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
  width: 350px;
  height: 240px;
  border-radius: 5px;
`;
export const ImovelImage = styled.div`
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  width: 100%;
  height: 200px;
  img {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    width: 100%;
    height: 100%;
  }
`;
export const ImovelBar = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #326d97;
  width: 100%;
  height: 38px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  color: #f4fafa;
`;
export const Price = styled.div`
  box-sizing: border-box;
  width: 130px;
  height: 80px;
  position: absolute;
  margin-top: -20px;
  margin-left: -20px;
  z-index: 2;
  background-color: #ffffff;
  border: solid 3px #326d97;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 15px;
  color: #326d97;
  h3 {
    color: #326d97;
    margin-bottom: 20px;
    font-weight: 550;
    font-size: 18px;
  }
`;
export const Divisor = styled.div`
  box-sizing: border-box;
  width: 0.5px;
  height: 30px;
  background-color: #f4fafa;
`;
export const Icons = styled.div`
  font-size: 24px;
  margin-top: 2px;
`;
