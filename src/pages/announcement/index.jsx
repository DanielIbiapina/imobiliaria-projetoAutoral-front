import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Form, Input, MainAnnouncement, PostButton } from "./styles";
import { useState, useContext } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";

export default function Announcement() {
  const [propertyType, setPropertyType] = useState("");
  const [price, setPrice] = useState("");
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  async function createProperty() {
    try {
      if (loading) {
        return;
      }

      if (!propertyType || !price || !address || !name || !email || !phone) {
        alert("Preencha todos os campos obrigatórios");
        return;
      }

      setLoading(true);

      await api.post("/announcement", {
        propertyType: propertyType,
        price: price,
        address: address,
        name: name,
        email: email,
        phone: phone,
      });

      toast("Informações enviadas para análise!");
      setLoading(false);
    } catch (e) {
      console.log(e);
      toast("Informações não foram enviadas!");
      setLoading(false);
    }
  }

  return (
    <>
      <Header />
      <MainAnnouncement>
        <p>Cadastre seu imóvel</p>
        <Form>
          <Input
            type="text"
            placeholder="Tipo do móvel, Ex: Locação, Venda"
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
            disabled={loading}
          />
          <Input
            type="text"
            placeholder="Preço do imóvel"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            disabled={loading}
          />
          <Input
            type="text"
            placeholder="Endereço do imóvel"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            disabled={loading}
          />
          <Input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={loading}
          />
          <Input
            type="text"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
          />
          <Input
            type="text"
            placeholder="Telemóvel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            disabled={loading}
          />
          <div>
            <PostButton onClick={createProperty} disabled={loading}>
              Adicionar imóvel
            </PostButton>
          </div>
        </Form>
      </MainAnnouncement>
      <Footer />
    </>
  );
}
