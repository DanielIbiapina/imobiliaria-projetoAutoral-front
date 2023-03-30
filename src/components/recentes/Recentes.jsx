import { ImoveisContainer } from "./styles";
import { ImovelBar } from "./styles";
import { ImovelImage } from "./styles";
import { Imovel } from "./styles";
import { RecentesContainer } from "./styles";

export default function Recentes({ recentProperties }) {
  return (
    <>
      <RecentesContainer>
        <p>RECENTES</p>
        <ImoveisContainer>
          {recentProperties.map((property) => {
            return (
              <Imovel>
                <ImovelImage>
                  <img src={property.image} />{" "}
                </ImovelImage>
                <ImovelBar>
                  {property.area}m² {property.rooms} quartos{" "}
                  {property.bathrooms} banheiros {property.parkingSpaces} vagas{" "}
                </ImovelBar>
              </Imovel>
            );
          })}
        </ImoveisContainer>
      </RecentesContainer>
    </>
  );
}
