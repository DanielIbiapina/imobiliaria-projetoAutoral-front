import { useNavigate } from "react-router-dom";
import { ImovelImage } from "./styles";
import { ImovelSideBar } from "./styles";
import { ImovelContainer } from "./styles";
import { DestaquesContainer } from "./styles";
import { FaBed, FaBath, FaCar } from "react-icons/fa";
import { useContext } from "react";
import UserContext from "../../contexts/userContext";

export default function Destaques({ destaqueProperty }) {
  const navigate = useNavigate();
  const { setId, setAndPersistId } = useContext(UserContext);
  console.log(destaqueProperty);
  if (destaqueProperty[0] === undefined) {
    return "carregando...";
  }

  function goToProperty(id) {
    setAndPersistId(id);
    navigate(`/property/${id}`);
  }
  return (
    <>
      <DestaquesContainer onClick={() => goToProperty(destaqueProperty[0].id)}>
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
