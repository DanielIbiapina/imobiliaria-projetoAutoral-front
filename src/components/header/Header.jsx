import { Atalhos, SubHeaderContainer } from "./styles";
import { AtalhosContainer } from "./styles";
import { Logo } from "./styles";
import { HeaderContainer } from "./styles";
import logo from "../../assets/logoielmelhorado.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const atalhos = ["Inicio", "Anuncie", "Contato", "Login", "Área do admin"];
  const [isClicked, setIsClicked] = useState();
  const [isLogin, setIsLogin] = useState(false);
  const [cor, setCor] = useState([]);
  const navigate = useNavigate();
  const isAdmin = localStorage.getItem("isAdmin");

  function click(atalho, index) {
    if (cor[0] === index) {
      setCor([]);
      setIsClicked(false);
      return;
    }
    setCor([index]);
    //change here
    setIsClicked(false);

    switch (atalho) {
      case "Inicio":
        setCor([]);
        setIsClicked(false);
        navigate("/");
        break;
      case "Anuncie":
        setCor([]);
        setIsClicked(false);
        navigate("/announcement");
        break;
      case "Contato":
        setCor([]);
        setIsClicked(false);
        navigate("/contact");
        break;
      case "Login":
        setCor([]);
        setIsClicked(false);
        navigate("/auth/sign-in");
        break;
      case "Área do admin":
        setCor([]);
        setIsClicked(false);
        navigate(isAdmin === "true" ? `/admin` : `/auth/sign-in`);
        break;

      default:
        break;
    }
  }
  return (
    <>
      <HeaderContainer>
        <Logo onClick={() => navigate("/")} src={logo}></Logo>
        <AtalhosContainer>
          <div>
            {atalhos.map((atalho, index) => (
              <Atalhos
                cor={cor.includes(index) ? "#326d97" : "#f4fafa"}
                backCor={cor.includes(index) ? "#f4fafa" : "#326d97"}
                onClick={() => click(atalho, index)}
              >
                {atalho}
              </Atalhos>
            ))}
          </div>
          {isClicked ? (
            <SubHeaderContainer>
              {isLogin ? (
                <>
                  <p>Sou cliente</p>
                  <Link to={"/auth/sign-in"}>
                    <p>Sou admin</p>
                  </Link>
                </>
              ) : (
                ""
              )}{" "}
            </SubHeaderContainer>
          ) : (
            ""
          )}
        </AtalhosContainer>
      </HeaderContainer>
    </>
  );
}
