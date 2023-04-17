import styled from "styled-components";

export const PropertyBody = styled.div`
  width: 100vmax;
  min-height: 100vh;
  height: 100%;
  margin-top: 72px;
  padding-top: 30px;
  padding-bottom: 30px;
  display: flex;
  justify-content: space-evenly;
  background-color: #f4fafa;
  p {
    color: black;
  }
`;

export const PropertyAndDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const PropertyContainer = styled.div`
  box-sizing: border-box;
  width: 700px;
  border: 2px solid black;
  border-radius: 5px;
`;

export const PropertyTitle = styled.div`
  font-size: 25px;
  box-sizing: border-box;
  padding: 3px;
  background-color: white;
`;
export const Neighborhood = styled.div`
  padding-bottom: 10px;
  box-sizing: border-box;
  padding: 3px;
  background-color: white;
`;
export const NextImages = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  margin-top: -3px;
  img {
    height: 100%;
    margin-right: 5px;
    flex-shrink: 0;
  }
  overflow-x: scroll;
`;
export const FullDataBar = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-top: 2px solid black;
`;
export const IconContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #f4fafa;
  height: 100%;
  width: 700px;
`;
export const Description = styled.div`
  width: 700px;
  margin-top: 50px;
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
export const SideBar = styled.div`
  width: 500px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: 10px;
  border: 2px solid black;
`;

export const Button = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 30px;
  background-color: #326d97;
  width: 400px;
  height: 90px;
`;
export const SendMessageButton = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 30px;
  background-color: #326d97;
  width: 400px;
  height: 90px;
`;
