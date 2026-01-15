import styles from "./login.module.css";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Typograph } from "../../components/Typograph";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      alert("nenhum usuario cadastrado");
      return;
    }

    const registredUser = savedUser.find(
      (user) => email === user.email && password === user.password
    );

    if (registredUser) {
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("loggedUser", JSON.stringify(registredUser));
      navigate("/auth/home");
    } else {
      alert("E-mail ou senha inválidos");
    }
  }

  return (
    <div className={styles.login}>
      <Typograph className={styles.titulo} variant="titulo">
        Login
      </Typograph>
      <form onSubmit={handleSubmit} className={styles.formInputs}>
        <Input onChange={(e) => setEmail(e.target.value)} name="E-mail" />
        <Input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="Senha"
        />
        <Button nameButton="Login" />
        <div className={styles.link_cadastro}>
          <Typograph>
            Ainda não se cadastrou ? <Link to={"/register"}>clique aqui </Link>
          </Typograph>
        </div>
      </form>
    </div>
  );
};
