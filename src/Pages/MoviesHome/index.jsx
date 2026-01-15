import { Link } from "react-router-dom";
import { BarraNavegar } from "../../components/BarraNavegar";
import styles from "./movieshome.module.css";

export const MoviesHome = () => {
  const loggeduser = JSON.parse(localStorage.getItem("loggedUser"));
  return (
    <ul className={styles.movieshome}>
      <li className={styles.usuario}>Usuario: {loggeduser?.name}</li>

      <Link to={"/auth/liked"}>
        <li className={styles.likes}>Gostei</li>
      </Link>

      <Link to={"/auth/disliked"}>
        <li className={styles.dislikes}>Não Gostei</li>
      </Link>

      <Link to={"/auth/later"}>
        <li className={styles.later}>Ver mais Tarde</li>
      </Link>

      <BarraNavegar />
    </ul>
  );
};
