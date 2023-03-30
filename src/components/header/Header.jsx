import { Atalhos } from "./styles";
import { AtalhosContainer } from "./styles";
import { Logo } from "./styles";
import { HeaderContainer } from "./styles";
import logo from "../../assets/logoielmelhorado.png";

export default function Header() {
  const atalhos = ["Inicio", "Lalala", "Lalala", "Lalala", "Lalala", "Lalala"];
  return (
    <HeaderContainer>
      <Logo src={logo}></Logo>
      <AtalhosContainer>
        {atalhos.map((atalho) => (
          <Atalhos>{atalho}</Atalhos>
        ))}
      </AtalhosContainer>
    </HeaderContainer>
  );
}
