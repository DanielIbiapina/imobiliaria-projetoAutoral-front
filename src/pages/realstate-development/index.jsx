import { useContext, useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import {
  Button,
  Contact,
  Description,
  Divisor,
  FullDataBar,
  IconContainer,
  Icons,
  Neighborhood,
  NextImages,
  PropertyAndDescriptionContainer,
  PropertyBody,
  PropertyContainer,
  PropertyTitle,
  SendMessageButton,
  SideBar,
} from "./styles";
import api from "../../services/api";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function RealStateDevelopment() {
  const [realState, setRealState] = useState(null);
  const id = localStorage.getItem("id");
  const [markedImage, setMarkedImage] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    async function fetchData() {
      try {
        const realStateData = await api.get(`/realstate-development/${id}`);
        setRealState(realStateData.data);

        setMarkedImage(realStateData.data.mainImage);
      } catch (e) {
        console.log(e);
        console.log("deu ruim");
      }
    }
    fetchData();
  }, []);
  if (realState === null || realState.RealStateDevelopmentImages === null) {
    return "carregando...";
  }
  const linkVisita =
    "https://wa.me/351938374379?text=Olá%20gostaria%20de%20fazer%20uma%20visita%20ao%20" +
    realState.name;
  const linkProposta =
    "https://wa.me/351938374379?text=Olá%20gostaria%20de%20fazer%20uma%20proposta%20para%20" +
    realState.name;
  console.log(id);
  return (
    <>
      <Header />

      <PropertyBody>
        <PropertyAndDescriptionContainer>
          <PropertyContainer>
            <PropertyTitle>{realState.name} </PropertyTitle>
            <Neighborhood>{realState.address} </Neighborhood>
            <PropertyImage Img={markedImage}></PropertyImage>
            <NextImages>
              <img
                onClick={() => setMarkedImage(realState.mainImage)}
                src={realState.mainImage}
              />
              {realState.RealStateDevelopmentImages.map((imagem, index) => {
                return (
                  <>
                    <img
                      onClick={() => setMarkedImage(imagem.image)}
                      src={imagem.image}
                    />
                  </>
                );
              })}
            </NextImages>
          </PropertyContainer>
          <Description>
            <h1>Descrição</h1>
            {realState.description}
          </Description>
        </PropertyAndDescriptionContainer>
        <SideBar>
          <p>VENDA</p>
          <h7>valores sujeitos a alterações sem aviso prévio</h7>
          <Button>
            <a href={token ? linkVisita : `/auth/sign-in`}>Agendar visita</a>
            <Divisor></Divisor>
            <a href={token ? linkProposta : `/auth/sign-in`}>Fazer proposta</a>
          </Button>
          <Link to={token ? `/contact` : `/auth/sign-in`}>
            <SendMessageButton>Enviar mensagem</SendMessageButton>
          </Link>
        </SideBar>
      </PropertyBody>

      <Footer />
    </>
  );
}
const PropertyImage = styled.img.attrs((props) => ({
  src: props.Img,
}))`
  width: 100%;
`;
