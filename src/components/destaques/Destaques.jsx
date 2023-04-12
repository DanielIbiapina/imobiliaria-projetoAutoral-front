import { ImovelImage } from "./styles";
import { ImovelSideBar } from "./styles";
import { ImovelContainer } from "./styles";
import { DestaquesContainer } from "./styles";
import { FaBed, FaBath, FaCar } from "react-icons/fa";

export default function Destaques({ destaqueProperty }) {
  console.log(destaqueProperty);
  if (destaqueProperty[0] === undefined) {
    return "carregando...";
  }

  return (
    <>
      <DestaquesContainer>
        <p>DESTAQUES</p>
        <ImovelContainer>
          <ImovelImage>
            <img src={destaqueProperty[0].image} />{" "}
          </ImovelImage>{" "}
          <ImovelSideBar>
            <h1>ÓTIMO T3 REMODELADO - Excelente localização</h1>{" "}
            <h2>{destaqueProperty[0].area}m² </h2>
            <h2>
              {destaqueProperty[0].rooms} <FaBed />{" "}
            </h2>
            <h2>
              {destaqueProperty[0].bathrooms} <FaBath />{" "}
            </h2>
            <h2>
              {destaqueProperty[0].parkingSpaces} <FaCar />{" "}
            </h2>
            <h2>{destaqueProperty[0].address} </h2>
          </ImovelSideBar>
        </ImovelContainer>
      </DestaquesContainer>
    </>
  );
}
