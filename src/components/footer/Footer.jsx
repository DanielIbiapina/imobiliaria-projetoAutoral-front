import { FooterContainer } from "./styles";
import { MdRoom, MdEmail } from "react-icons/md";
import { BsWhatsapp, BsInstagram } from "react-icons/bs";
import { Whatsapp } from "./styles";
import { Address } from "./styles";
import { SocialMedia } from "./styles";
import { FooterContainer1 } from "./styles";
import { FooterContainer2 } from "./styles";
import { SocialMediaContainer } from "./styles";

export default function Footer() {
  return (
    <>
      <FooterContainer1>
        <Whatsapp>
          <p>Envie uma mensagem</p>
          <button>Enviar mensagem</button>
        </Whatsapp>
        <Address>
          <MdRoom />
          Avenida da República, n.º 679, 3º andar, sala 36 4450-242 MATOSINHOS
        </Address>
        <SocialMedia>
          <p>Redes Sociais</p>
          <SocialMediaContainer>
            <BsInstagram />
            <BsWhatsapp />
            <MdEmail />
          </SocialMediaContainer>
        </SocialMedia>
      </FooterContainer1>
      <FooterContainer2>
        Daniel Martins 2023 © | Todos Os Direitos Reservados
      </FooterContainer2>
    </>
  );
}
