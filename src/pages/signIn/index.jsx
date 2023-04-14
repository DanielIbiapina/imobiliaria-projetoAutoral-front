import { Oval } from "react-loader-spinner";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import api from "../../services/api.js";
import {
  BodyLogin,
  BotaoEntrar,
  BotaoNaoTenhoConta,
  Form,
  Input,
} from "./styles.js";
import UserContext from "../../contexts/userContext.jsx";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setAndPersistToken } = useContext(UserContext);

  async function fazerLogin(event) {
    try {
      event.preventDefault();
      setLoading(true);
      const userData = await api.post(`/auth/sign-in`, {
        email: email,
        password: senha,
      });
      console.log(userData.data.token);
      setAndPersistToken(userData.data.token);
      setLoading(false);
      navigate("/");
      console.log();
    } catch (error) {
      alert("erro");
      setLoading(false);
      console.log(error.response.data);
    }
  }

  return (
    <BodyLogin>
      <Form onSubmit={fazerLogin}>
        <Input
          type="email"
          placeholder="  E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="  Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        {loading ? (
          <BotaoEntrar>
            <Oval
              height={40}
              width={40}
              color="#FFFFFF"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="oval-loading"
              secondaryColor="#4fa94d"
              strokeWidth={2}
              strokeWidthSecondary={2}
            />
          </BotaoEntrar>
        ) : (
          <BotaoEntrar type="submit">Entrar</BotaoEntrar>
        )}
      </Form>

      <Link to={"/sign-up"}>
        <BotaoNaoTenhoConta>
          Não possui uma conta? Cadastre-se
        </BotaoNaoTenhoConta>
      </Link>
    </BodyLogin>
  );
}
