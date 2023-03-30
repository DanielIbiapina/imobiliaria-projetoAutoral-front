import { ImovelImage } from "./styles";
import { ImovelSideBar } from "./styles";
import { ImovelContainer } from "./styles";
import { DestaquesContainer } from "./styles";

export default function Destaques({ destaqueProperty }) {
  console.log(destaqueProperty);

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
            <h2>{destaqueProperty[0].rooms} quartos </h2>
            <h2>{destaqueProperty[0].bathrooms} banheiros </h2>
            <h2>{destaqueProperty[0].parkingSpaces} vagas </h2>
            <h2>{destaqueProperty[0].address} </h2>
          </ImovelSideBar>
        </ImovelContainer>
      </DestaquesContainer>
    </>
  );
}
