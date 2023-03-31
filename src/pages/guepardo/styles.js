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

  h4 {
    display: flex;
    align-items: flex-end;
    font-weight: 600;
    width: 40px;
    height: 40px;
    margin-left: 40px;
    font-size: 20px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: goldenrod;
  }
`;
export const GeometryContainerMain = styled.div`
  margin-top: 40px;
  width: 100vmax;
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
  width: 900px;
  height: 400px;
  display: flex;
  justify-content: space-around;
`;
export const Data = styled.div`
  width: 200px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  p {
    color: black;
    font-size: 20px;
  }
`;
export const Input = styled.input`
  width: 100px;
  height: 30px;
  font-size: 20px;
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
      font-size: 20px;
    }
  }
`;

export const Next = styled.div`
  width: 100px;
  height: 30px;
  background-color: goldenrod;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  margin-bottom: 5px;
`;
export const SituationContainer = styled.div`
  width: 100vmax;
  min-height: 100vh;
  height: 100%;
  background-color: #d4d4cc;
  h4 {
    display: flex;
    align-items: flex-end;
    font-weight: 600;
    width: 40px;
    height: 40px;
    margin-left: 40px;
    font-size: 20px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: goldenrod;
  }
`;
export const SituationContainerMain = styled.div`
  width: 100vmax;
  height: 100%;
  background-color: #d4d4cc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
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

export const SolutionExplanationContainer = styled.div`
  h5 {
    box-sizing: border-box;
    padding: 5px;
    display: flex;

    justify-content: center;
    width: 500px;
    height: 150px;
    background-color: gray;
    color: white;
    font-size: 18px;
    border-radius: 5px;
  }
  h6 {
    margin-left: 390px;
    position: fixed;
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 18px;
    margin-top: 108px;

    width: 100px;
    height: 30px;
    background-color: #4b5255;

    border-radius: 10px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
`;
