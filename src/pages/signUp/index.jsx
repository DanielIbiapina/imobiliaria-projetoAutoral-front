import { Oval } from "react-loader-spinner";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  BotaoEntrar,
  BotaoNaoTenhoConta,
  Form,
  Input,
  SignUpContainer,
} from "./styles";
import { toast } from "react-toastify";
import api from "../../services/api";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function fazerCadastro(event) {
    event.preventDefault();
    setLoading(true);
    if (password !== confirmPassword) {
      toast("As senhas devem ser iguais!");
      setLoading(false);
    } else
      try {
        await api.post(`/users`, {
          email: email,
          password: password,
        });
        setLoading(false);
        toast("Inscrito com sucesso! Por favor, faça login.");
        navigate("/auth/sign-in");
      } catch (error) {
        toast("Não foi possível fazer o cadastro!");
        setLoading(false);
        console.log(error.response.data);
      }
  }

  return (
    <SignUpContainer>
      <Form onSubmit={fazerCadastro}>
        <Input
          type="email"
          placeholder="  E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="  Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          type="password"
          placeholder="  Confirme sua senha"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
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
          <BotaoEntrar type="submit">Cadastrar</BotaoEntrar>
        )}
      </Form>

      <Link to={"/auth/sign-in"}>
        <BotaoNaoTenhoConta>Já possui uma conta? Entre</BotaoNaoTenhoConta>
      </Link>
    </SignUpContainer>
  );
}
