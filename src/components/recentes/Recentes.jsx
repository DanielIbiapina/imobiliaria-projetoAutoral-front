import { ImoveisContainer } from "./styles";
import { ImovelBar } from "./styles";
import { ImovelImage } from "./styles";
import { Imovel } from "./styles";
import { RecentesContainer } from "./styles";
import { FaBed, FaBath, FaCar } from "react-icons/fa";
import { Icons } from "./styles";
import { Divisor } from "./styles";
import { Price } from "./styles";

export default function Recentes({ recentProperties }) {
  return (
    <>
      <RecentesContainer>
        <p>RECENTES</p>
        <ImoveisContainer>
          {recentProperties.map((property) => {
            return (
              <Imovel>
                <Price>
                  Venda
                  <h3>{property.price} €</h3>
                </Price>
                <ImovelImage>
                  <img src={property.image} />{" "}
                </ImovelImage>
                <ImovelBar>
                  {property.area}m²
                  <Divisor></Divisor>
                  {property.rooms}
                  <Icons>
                    <FaBed />
                  </Icons>
                  <Divisor></Divisor>
                  {property.bathrooms}
                  <Icons>
                    <FaBath />
                  </Icons>
                  <Divisor></Divisor>
                  {property.parkingSpaces}
                  <Icons>
                    <FaCar />
                  </Icons>
                </ImovelBar>
              </Imovel>
            );
          })}
        </ImoveisContainer>
      </RecentesContainer>
    </>
  );
}
