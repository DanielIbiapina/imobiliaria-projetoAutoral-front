import styled from "styled-components";

export const SubsystemsContainer = styled.div`
  width: 100vmax;
  min-height: 100vh;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #d4d4cc;
`;
export const Subsystem = styled.img`
  width: 330px;
`;
export const GeometryContainer = styled.div`
  width: 100vmax;
  min-height: 100vh;
  height: 100%;
  background-color: #d4d4cc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    color: goldenrod;
    font-size: 48px;
  }
`;
export const DataContainer = styled.div`
  width: 700px;
  height: 400px;
  display: flex;
  justify-content: space-around;
`;
export const Data = styled.div`
  width: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  p {
    color: black;
    font-size: 18px;
  }
`;
export const Input = styled.input`
  width: 100px;
  height: 30px;
  font-size: 28px;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  div {
    display: flex;
    justify-content: start;
    align-items: center;
    width: 100%;
    p {
      color: black;
      font-size: 28px;
    }
  }
`;

export const Next = styled.div``;
export const SituationContainer = styled.div`
  width: 100vmax;
  min-height: 100vh;
  height: 100%;
  background-color: #d4d4cc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    color: black;
    font-size: 24px;
  }
  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    width: 500px;
    height: 40px;
    background-color: #4b5255;
    color: white;
    font-size: 18px;
    border-radius: 5px;
  }
`;
