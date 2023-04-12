import { useContext, useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { PropertyContainer } from "./styles";
import UserContext from "../../contexts/userContext";
import api from "../../services/api";

export default function Property() {
  const [propertyFull, setPropertyFull] = useState("");
  const { id } = useContext(UserContext);

  useEffect(() => {
    async function fetchData() {
      try {
        const propertyFullData = await api.get(`/property/${id}`);
        console.log(propertyFullData.data);
        setPropertyFull(propertyFullData.data);
      } catch (e) {
        console.log(e);
        console.log("deu ruim");
      }
    }
    fetchData();
  }, []);

  if (propertyFull === undefined) {
    return "carregando...";
  }
  return (
    <>
      <Header />

      <PropertyContainer>
        <p>oiiiiii</p>
      </PropertyContainer>

      <Footer />
    </>
  );
}
