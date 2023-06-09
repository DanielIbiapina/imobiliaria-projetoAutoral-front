import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import {
  AddPropertyContainer,
  Form,
  Input,
  InputText,
  MainAdmin,
  MessageContainer,
  PostButton,
} from "./styles";
import { useState, useContext, useEffect } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";
import UserContext from "../../contexts/userContext";
import { RxTriangleRight, RxTriangleDown } from "react-icons/rx";

export default function Admin() {
  const [rooms, setRooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [parkingSpaces, setParkingSpaces] = useState("");
  const [area, setArea] = useState("");
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [laundry, setLaundry] = useState("");
  const [elevator, setElevator] = useState("");
  const [balcony, setBalcony] = useState("");
  const [description, setDescription] = useState("");
  const [nameRS, setNameRS] = useState("");
  const [addressRS, setAddressRS] = useState("");
  const [mainImageRS, setMainImageRS] = useState("");
  const [descriptionRS, setDescriptionRS] = useState("");
  const [idRS, setIdRS] = useState("");
  const [imageRS, setImageRS] = useState("");
  const [messages, setMessages] = useState("");
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");
  const [isMessage, setIsMessage] = useState(false);
  const [isAddProperty, setIsAddProperty] = useState(false);
  const [isAddRealState, setIsAddRealState] = useState(false);
  const [isAddRealStateImage, setIsAddRealStateImage] = useState(false);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const messagesData = await api.get("/messages");
        console.log(messagesData);
        setMessages(messagesData.data);
      } catch (e) {
        console.log(e);
        console.log("deu ruim");
      }
    }
    fetchData();
  }, []);

  async function createProperty() {
    try {
      if (loading) {
        return;
      }

      if (
        !rooms ||
        !bathrooms ||
        !parkingSpaces ||
        !area ||
        !address ||
        !image ||
        !price ||
        !laundry ||
        !elevator ||
        !balcony ||
        !description
      ) {
        alert("Preencha todos os campos obrigatórios");
        return;
      }

      setLoading(true);

      await api.post(
        "/admin",
        {
          data: {
            rooms: Number(rooms),
            bathrooms: Number(bathrooms),
            parkingSpaces: Number(parkingSpaces),
            area: Number(area),
            address: address,
            name: name,
            image: image,
            price: price,
          },
          fullData: {
            laundry: Number(laundry),
            elevator: Number(elevator),
            description: description,
            balcony: Number(balcony),
          },
        },
        config
      );

      toast("Imóvel criado");
      setLoading(false);
      setRooms("");
      setBathrooms("");
      setParkingSpaces("");
      setArea("");
      setAddress("");
      setName("");
      setImage("");
      setPrice("");
      setLaundry("");
      setElevator("");
      setDescription("");
      setBalcony("");
    } catch (e) {
      console.log(e);
      toast("Imóvel não foi criado");
      setLoading(false);
    }
  }

  async function createRealState() {
    try {
      if (loading) {
        return;
      }

      if (!nameRS || !addressRS || !mainImageRS || !descriptionRS) {
        alert("Preencha todos os campos obrigatórios");
        return;
      }

      setLoading(true);

      await api.post(
        "/admin/realstate-development",
        {
          address: addressRS,
          name: nameRS,
          description: descriptionRS,
          mainImage: mainImageRS,
        },
        config
      );

      toast("Empreendimento criado");
      setLoading(false);
      setNameRS("");
      setAddressRS("");
      setMainImageRS("");
      setDescriptionRS("");
    } catch (e) {
      console.log(e);
      toast("Empreendimento não foi criado");
      setLoading(false);
    }
  }

  async function addImageRealState() {
    try {
      if (loading) {
        return;
      }

      if (!imageRS || !idRS) {
        alert("Preencha todos os campos obrigatórios");
        return;
      }

      setLoading(true);

      await api.post(
        "/admin/realstate-development-image",
        {
          realStateDevelopmentId: Number(idRS),
          image: imageRS,
        },
        config
      );

      toast("Imagem adicionada");
      setLoading(false);
      setImageRS("");
    } catch (e) {
      console.log(e);
      toast("Imagem não foi adicionada");
      setLoading(false);
    }
  }

  return (
    <>
      <Header />
      <MainAdmin>
        {isMessage ? (
          <>
            <AddPropertyContainer onClick={() => setIsMessage(!isMessage)}>
              <RxTriangleDown /> Visualizar mensagens
            </AddPropertyContainer>

            {messages.map((message, index) => {
              return (
                <>
                  <MessageContainer>
                    {message.name}
                    {message.email}
                    {message.message}
                  </MessageContainer>
                </>
              );
            })}
          </>
        ) : (
          <AddPropertyContainer onClick={() => setIsMessage(!isMessage)}>
            <RxTriangleRight /> Visualizar mensagens
          </AddPropertyContainer>
        )}
        {isAddProperty ? (
          <>
            <AddPropertyContainer
              onClick={() => setIsAddProperty(!isAddProperty)}
            >
              <RxTriangleDown /> Adicionar Imóvel
            </AddPropertyContainer>
            <p>Preencha os dados do imóvel a ser adicionado</p>
            <Form>
              <Input
                type="number"
                placeholder="  Quartos"
                value={rooms}
                onChange={(e) => setRooms(e.target.value)}
                disabled={loading}
              />
              <Input
                type="number"
                placeholder="  Banheiros"
                value={bathrooms}
                onChange={(e) => setBathrooms(e.target.value)}
                disabled={loading}
              />
              <Input
                type="number"
                placeholder="  Vagas de garagem"
                value={parkingSpaces}
                onChange={(e) => setParkingSpaces(e.target.value)}
                disabled={loading}
              />
              <Input
                type="number"
                placeholder="  Área em m²"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                disabled={loading}
              />
              <InputText
                type="text"
                placeholder="  Endereço"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                disabled={loading}
              />
              <Input
                type="text"
                placeholder="  Nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={loading}
              />
              <Input
                type="text"
                placeholder="  Imagem"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                disabled={loading}
              />
              <Input
                type="text"
                placeholder="  Preço"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                disabled={loading}
              />
            </Form>
            <p>Preencha os dados extras</p>
            <Form>
              <Input
                type="number"
                placeholder="  Lavanderia"
                value={laundry}
                onChange={(e) => setLaundry(e.target.value)}
                disabled={loading}
              />
              <Input
                type="number"
                placeholder="  Elevador"
                value={elevator}
                onChange={(e) => setElevator(e.target.value)}
                disabled={loading}
              />
              <Input
                type="number"
                placeholder="  Varanda"
                value={balcony}
                onChange={(e) => setBalcony(e.target.value)}
                disabled={loading}
              />
              <InputText
                type="text"
                placeholder="  Descrição"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                disabled={loading}
              />

              <div>
                <PostButton onClick={createProperty} disabled={loading}>
                  Adicionar imóvel
                </PostButton>
              </div>
            </Form>
          </>
        ) : (
          <AddPropertyContainer
            onClick={() => setIsAddProperty(!isAddProperty)}
          >
            <RxTriangleRight /> Adicionar Imóvel
          </AddPropertyContainer>
        )}
        {isAddRealState ? (
          <>
            <AddPropertyContainer
              onClick={() => setIsAddRealState(!isAddRealState)}
            >
              <RxTriangleDown /> Adicionar Empreendimento
            </AddPropertyContainer>
            <p>Preencha os dados do empreendimento</p>
            <Form>
              <Input
                type="text"
                placeholder="  Nome"
                value={nameRS}
                onChange={(e) => setNameRS(e.target.value)}
                disabled={loading}
              />
              <Input
                type="text"
                placeholder="  Endereço"
                value={addressRS}
                onChange={(e) => setAddressRS(e.target.value)}
                disabled={loading}
              />
              <Input
                type="text"
                placeholder="  Imagem Principal"
                value={mainImageRS}
                onChange={(e) => setMainImageRS(e.target.value)}
                disabled={loading}
              />
              <InputText
                type="text"
                placeholder="  Descrição"
                value={descriptionRS}
                onChange={(e) => setDescriptionRS(e.target.value)}
                disabled={loading}
              />

              <div>
                <PostButton onClick={createRealState} disabled={loading}>
                  Adicionar Empreendimento
                </PostButton>
              </div>
            </Form>
          </>
        ) : (
          <AddPropertyContainer
            onClick={() => setIsAddRealState(!isAddRealState)}
          >
            <RxTriangleRight /> Adicionar Empreendimento
          </AddPropertyContainer>
        )}
        {isAddRealStateImage ? (
          <>
            <AddPropertyContainer
              onClick={() => setIsAddRealStateImage(!isAddRealStateImage)}
            >
              <RxTriangleDown /> Adicionar imagem ao empreendimento
            </AddPropertyContainer>
            <p>Adicione imagens ao Empreendimento</p>
            <Form>
              <Input
                type="number"
                placeholder="  Id do empreendimento"
                value={idRS}
                onChange={(e) => setIdRS(e.target.value)}
                disabled={loading}
              />
              <Input
                type="text"
                placeholder="  Imagem"
                value={imageRS}
                onChange={(e) => setImageRS(e.target.value)}
                disabled={loading}
              />

              <div>
                <PostButton onClick={addImageRealState} disabled={loading}>
                  Adicionar Imagem
                </PostButton>
              </div>
            </Form>
          </>
        ) : (
          <AddPropertyContainer
            onClick={() => setIsAddRealStateImage(!isAddRealStateImage)}
          >
            <RxTriangleRight /> Adicionar imagem ao empreendimento
          </AddPropertyContainer>
        )}
      </MainAdmin>
      <Footer />
    </>
  );
}
