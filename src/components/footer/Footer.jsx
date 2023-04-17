import { FooterContainer } from "./styles";
import { MdRoom, MdEmail } from "react-icons/md";
import { BsWhatsapp, BsInstagram } from "react-icons/bs";
import { Whatsapp } from "./styles";
import { Address } from "./styles";
import { SocialMedia } from "./styles";
import { FooterContainer1 } from "./styles";
import { FooterContainer2 } from "./styles";
import { SocialMediaContainer } from "./styles";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <FooterContainer1>
        <Whatsapp>
          <p>Envie uma mensagem</p>
          <Link to={"/contact"}>
            <button>Enviar mensagem</button>
          </Link>
        </Whatsapp>
        <Address>
          <MdRoom />
          Avenida da República, n.º 679, 3º andar, sala 36 4450-242 MATOSINHOS
        </Address>
        <SocialMedia>
          <p>Redes Sociais</p>
          <SocialMediaContainer>
            <a href="https://www.instagram.com/martinsbrokers/">
              <BsInstagram />
            </a>
            <a href="https://wa.me/351938374379">
              <BsWhatsapp />
            </a>
            <a href="mailto:martins.daniel@hotmail.com">
              <MdEmail />
            </a>
          </SocialMediaContainer>
        </SocialMedia>
      </FooterContainer1>
      <FooterContainer2>
        Daniel Martins 2023 © | Todos Os Direitos Reservados
      </FooterContainer2>
    </>
  );
}
