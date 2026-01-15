import { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Typograph } from "../../components/Typograph";
import styles from "./register.module.css";
import { Navigate, useNavigate } from "react-router-dom";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const [user, setUser] = useState(() => {
  const storedUsers = localStorage.getItem("user");
  return storedUsers ? JSON.parse(storedUsers) : [];
});

  function handleSubmit(e) {
    e.preventDefault();
    const newUser = {
      name,
      email,
      password,
    };

    setUser((prevUser) => [...prevUser, newUser]);

    alert("Seu cadastro foi realizado com sucesso");
    navigate("/");
  }


  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <div className={styles.container}>
      <Typograph className={styles.title} variant="titulo">
        Cadastro
      </Typograph>
      <form onSubmit={handleSubmit} className={styles.form}>
        <Input onChange={(e) => setName(e.target.value)} name="Nome" />
        <Input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="E-mail"
        />
        <Input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="Senha"
        />
        <div className={styles.button}>
          <Button nameButton="Cadastrar" />
        </div>
      </form>
    </div>
  );
};
