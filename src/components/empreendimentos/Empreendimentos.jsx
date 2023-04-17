import { useNavigate } from "react-router-dom";
import {
  DevelopmentContainer,
  Divisor,
  Icons,
  ImoveisContainer,
  Imovel,
  ImovelBar,
  ImovelImage,
  ImovelName,
  Price,
} from "./styles";
import { useContext } from "react";
import UserContext from "../../contexts/userContext";

export default function Empreendimentos({ developmentProperties }) {
  const navigate = useNavigate();
  const { setId, setAndPersistId } = useContext(UserContext);
  function goToRealStateDevelopment(id) {
    setAndPersistId(id);
    navigate(`/realstate-development/${id}`);
  }

  return (
    <>
      <DevelopmentContainer>
        <p>EMPREENDIMENTOS</p>
        <ImoveisContainer>
          {developmentProperties.map((development) => {
            return (
              <Imovel onClick={() => goToRealStateDevelopment(development.id)}>
                <ImovelName>{development.name} </ImovelName>
                <ImovelImage>
                  <img src={development.mainImage} />{" "}
                </ImovelImage>
              </Imovel>
            );
          })}
        </ImoveisContainer>
      </DevelopmentContainer>
    </>
  );
}
