import styled from "styled-components";

export const PropertyBody = styled.div`
  width: 100vmax;
  min-height: 100vh;
  height: 100%;
  margin-top: 72px;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    color: black;
  }
`;
export const PropertyContainer = styled.div`
  width: 700px;
`;
export const PropertyImage = styled.img`
  width: 100%;
`;
export const PropertyTitle = styled.div`
  font-size: 25px;
`;
export const Neighborhood = styled.div`
  margin-bottom: 10px;
`;
export const NextImages = styled.div`
  background-color: black;
  height: 80px;
  img {
    height: 100%;
    margin-right: 5px;
  }
`;
export const FullDataBar = styled.div`
  width: 100%;
  height: 60px;
  background-color: green;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const IconContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #326d97;
  height: 100%;
  width: 100%;
`;
export const Description = styled.div`
  width: 700px;
  background-color: red;
  h1 {
  }
`;
export const Contact = styled.div``;
export const Icons = styled.div`
  font-size: 24px;
  margin-top: 2px;
`;

export const Divisor = styled.div`
  box-sizing: border-box;
  width: 0.5px;
  height: 30px;
  background-color: black;
`;
