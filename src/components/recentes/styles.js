import styled from "styled-components";

export const RecentesContainer = styled.div`
  width: 100vmax;
  height: 600px;
  background-color: #f4fafa;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  p {
    color: #326d97;
    margin-bottom: 20px;
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
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #326d97;
  width: 100%;
  height: 38px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;
