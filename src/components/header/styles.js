import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100vmax;
  height: 72px;
  background-color: #326d97;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 3;
`;
export const Logo = styled.img`
  height: 72px;
`;
export const AtalhosContainer = styled.div`
  width: 400px;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #326d97;
  div {
    display: flex;
    height: 100%;
  }
`;
export const Atalhos = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.cor};
  //color: #f4fafa;
  background-color: ${(props) => props.backCor};
  height: 100%;
  width: 100%;
  border-right: solid 1.5px #326d97;
  border-left: solid 1.5px #326d97;
  :hover {
    cursor: pointer;
    background-color: #f4fafa;
    color: #326d97;
    border-right: solid 1.5px #326d97;
    border-left: solid 1.5px #326d97;
    transition: 200ms linear;
  }
`;
export const SubHeaderContainer = styled.div`
  background-color: #f4fafa;
  position: absolute;
  width: 400px;
  top: 72px;
  border-right: solid 1.5px #326d97;
  border-left: solid 1.5px #326d97;
  border-bottom: solid 1.5px #326d97;
  display: flex;
  flex-direction: column;
  p {
    margin-left: 5px;
    margin-top: 2px;
    color: black;
  }
`;
