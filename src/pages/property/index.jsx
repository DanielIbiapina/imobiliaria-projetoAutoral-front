import { useContext, useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import {
  Contact,
  Description,
  Divisor,
  FullDataBar,
  IconContainer,
  Icons,
  Neighborhood,
  NextImages,
  PropertyBody,
  PropertyContainer,
  PropertyImage,
  PropertyTitle,
} from "./styles";
import api from "../../services/api";
import { FaBed, FaBath, FaCar } from "react-icons/fa";
import { BiArea } from "react-icons/bi";
import { MdElevator, MdLocalLaundryService, MdBalcony } from "react-icons/md";

export default function Property() {
  const [propertyFull, setPropertyFull] = useState(null);
  const id = localStorage.getItem("id");

  useEffect(() => {
    async function fetchData() {
      try {
        const propertyFullData = await api.get(`/property/${id}`);
        setPropertyFull(propertyFullData.data);
        console.log(propertyFullData.data);
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
    { name: propertyFull.area, icon: "BiArea" },
    { name: propertyFull.PropertyFull[0].balcony, icon: "MdBalcony" },
    {
      name: propertyFull.PropertyFull[0].laundry,
      icon: "MdLocalLaundryService",
    },
    { name: propertyFull.PropertyFull[0].elevator, icon: "MdElevator" },
  ];

  if (propertyFull === null || propertyFull.PropertyFull === null) {
    return "carregando...";
  }

  console.log(id);
  return (
    <>
      <Header />

      <PropertyBody>
        <PropertyContainer>
          <PropertyTitle>{propertyFull.name} </PropertyTitle>
          <Neighborhood>{propertyFull.address} </Neighborhood>
          <PropertyImage src={propertyFull.image}></PropertyImage>
          <NextImages>
            <img src={propertyFull.image} />
            <img src={propertyFull.image} />
            <img src={propertyFull.image} />
            <img src={propertyFull.image} />
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
                      ) : icone.icon === "BiArea" ? (
                        <BiArea />
                      ) : icone.icon === "MdBalcony" ? (
                        <MdBalcony />
                      ) : icone.icon === "MdLocalLaundryService" ? (
                        <MdLocalLaundryService />
                      ) : (
                        <MdElevator />
                      )}
                    </Icons>
                    {icone.name} {icone.icon === "BiArea" ? "m²" : ""}
                    {icone.icon !== "MdElevator" ? <Divisor></Divisor> : ""}
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
        <Contact></Contact>
      </PropertyBody>

      <Footer />
    </>
  );
}
