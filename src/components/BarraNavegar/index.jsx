import { Link, useNavigate } from "react-router";
import styles from "./barranavegar.module.css";
import { Logout } from "../Hooks/logout";

export const BarraNavegar = () => {
  const navigate = useNavigate()



  return (
    <ul className={styles.barra_navegar}>
      <Link to={"/auth/search"}>
        <li>
          <img src="/icons/search.png" alt="" />
        </li>
      </Link>
      
    <Link to={"/auth/home"}>
      <li>
        <img src="/icons/home.png" alt="" />
      </li>
    </Link>

    <li onClick={() => navigate(-1)}>
      <img src="/icons/back.png" alt="" />
    </li>
    <Link to={"/"}>
        <li onClick={Logout}>
          <img src="/icons/logout.png" alt="" />
        </li>
    </Link>
      
    </ul>
  );
};
