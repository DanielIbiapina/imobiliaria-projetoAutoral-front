import {
  ContactContainer,
  Form,
  Input,
  InputText,
  MainAnnouncement,
  PostButton,
} from "./styles";
import { useState, useContext } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";

export default function ContactComponent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function createProperty() {
    try {
      if (loading) {
        return;
      }

      if (!message || !name || !email || !phone) {
        alert("Preencha todos os campos obrigatórios");
        return;
      }

      setLoading(true);

      await api.post("/contact", {
        name: name,
        email: email,
        phone: phone,
        message: message,
      });

      toast("Mensagem enviada, retornamos o contato em breve!");
      setLoading(false);
    } catch (e) {
      console.log(e);
      toast("Mensagem não foi enviada!");
      setLoading(false);
    }
  }

  return (
    <>
      <ContactContainer>
        <p>Contato</p>
        <Form>
          <Input
            type="text"
            placeholder="  Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={loading}
          />
          <Input
            type="text"
            placeholder="  E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
          />
          <Input
            type="text"
            placeholder="  Telemóvel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            disabled={loading}
          />
          <InputText
            type="text"
            placeholder="  Mensagem"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            disabled={loading}
          />
          <div>
            <PostButton onClick={createProperty} disabled={loading}>
              Enviar
            </PostButton>
          </div>
        </Form>
      </ContactContainer>
    </>
  );
}
