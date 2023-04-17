import Destaques from "../../components/destaques/Destaques";
import Empreendimentos from "../../components/empreendimentos/Empreendimentos";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Recentes from "../../components/recentes/Recentes";
import { Main } from "./styles";
import api from "../../services/api";
import { useEffect, useState, useNavigate } from "react";

export default function Home() {
  const [recentProperties, setRecentProperties] = useState([]);
  const [destaqueProperty, setDestaqueProperty] = useState([]);
  const [developmentProperties, setDevelopmentProperties] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const propertiesDataRecents = await api.get("/property/recent");
        console.log(propertiesDataRecents.data);
        setRecentProperties(propertiesDataRecents.data);
      } catch (e) {
        console.log(e);
        console.log("deu ruim");
      }

      try {
        const propertyDataDestaque = await api.get("/property/destaques");
        console.log(propertyDataDestaque.data);
        setDestaqueProperty(propertyDataDestaque.data);
      } catch (e) {
        console.log(e);
      }

      try {
        const realStateDevelopmentData = await api.get(
          "/realstate-development"
        );
        console.log(realStateDevelopmentData.data);
        setDevelopmentProperties(realStateDevelopmentData.data);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Main>
        <Destaques destaqueProperty={destaqueProperty} />
        <Recentes recentProperties={recentProperties} />
        <Empreendimentos developmentProperties={developmentProperties} />
      </Main>
      <Footer />
    </>
  );
}
