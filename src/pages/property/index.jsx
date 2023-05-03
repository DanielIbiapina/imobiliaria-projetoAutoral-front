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
import { FaBed, FaBath, FaCar } from "react-icons/fa";
import { BiArea } from "react-icons/bi";
import { MdElevator, MdLocalLaundryService, MdBalcony } from "react-icons/md";
import styled from "styled-components";
import ContactComponent from "../../components/contact/ContactComponent";
import { Link } from "react-router-dom";

export default function Property() {
  const [propertyFull, setPropertyFull] = useState(null);
  const id = localStorage.getItem("id");
  const [markedImage, setMarkedImage] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    async function fetchData() {
      try {
        const propertyFullData = await api.get(`/property/${id}`);
        setPropertyFull(propertyFullData.data);

        setMarkedImage(propertyFullData.data.image);
      } catch (e) {
        console.log(e);
        console.log("deu ruim");
      }
    }
    fetchData();
  }, []);
  if (propertyFull === null || propertyFull.PropertyFull === null) {
    return "carregando...";
  }
  const icones = [
    {
      name: propertyFull.rooms,
      icon: "FaBed",
    },
    {
      name: propertyFull.bathrooms,
      icon: "FaBath",
    },
    {
      name: propertyFull.parkingSpaces,
      icon: "FaCar",
    },
    { name: propertyFull.PropertyFull[0].elevator, icon: "MdElevator" },
    { name: propertyFull.PropertyFull[0].balcony, icon: "MdBalcony" },
    {
      name: propertyFull.PropertyFull[0].laundry,
      icon: "MdLocalLaundryService",
    },
    { name: propertyFull.area, icon: "BiArea" },
  ];

  const linkVisita =
    "https://wa.me/351938374379?text=Olá%20gostaria%20de%20fazer%20uma%20visita%20ao%20" +
    propertyFull.name;
  const linkProposta =
    "https://wa.me/351938374379?text=Olá%20gostaria%20de%20fazer%20uma%20proposta%20para%20" +
    propertyFull.name;
  console.log(id);

  return (
    <>
      <Header />

      <PropertyBody>
        <PropertyAndDescriptionContainer>
          <PropertyContainer>
            <PropertyTitle>{propertyFull.name} </PropertyTitle>
            <Neighborhood>{propertyFull.address} </Neighborhood>
            <PropertyImage Img={markedImage}></PropertyImage>
            <NextImages>
              <img
                onClick={() => setMarkedImage(propertyFull.image)}
                src={propertyFull.image}
              />
            </NextImages>
            <FullDataBar>
              {icones.map((icone) => {
                return (
                  <>
                    <IconContainer>
                      <Icons>
                        {icone.icon === "FaBed" ? (
                          <FaBed />
                        ) : icone.icon === "FaBath" ? (
                          <FaBath />
                        ) : icone.icon === "FaCar" ? (
                          <FaCar />
                        ) : icone.icon === "MdElevator" ? (
                          <MdElevator />
                        ) : icone.icon === "MdBalcony" ? (
                          <MdBalcony />
                        ) : icone.icon === "MdLocalLaundryService" ? (
                          <MdLocalLaundryService />
                        ) : (
                          <BiArea />
                        )}
                      </Icons>
                      {icone.name}
                      {icone.icon === "BiArea" ? "m²" : <Divisor></Divisor>}
                    </IconContainer>
                  </>
                );
              })}
            </FullDataBar>
          </PropertyContainer>
          <Description>
            <h1>Descrição</h1>
            {propertyFull.PropertyFull[0].description}
          </Description>
        </PropertyAndDescriptionContainer>

        <SideBar>
          <p>VENDA</p>
          <h1>{propertyFull.price},00 €</h1>
          <h2>valores sujeitos a alterações sem aviso prévio</h2>
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
