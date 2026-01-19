import { Link } from "react-router-dom";
import { BarraNavegar } from "../../components/BarraNavegar";
import styles from "./movieshome.module.css";

export const MoviesHome = () => {
  const loggeduser = JSON.parse(localStorage.getItem("loggedUser"));
  return (
    <ul className={styles.movieshome}>
      <div className={styles.container_user}>
      <li className={styles.icon_user}>{loggeduser?.name[0]}</li>
      <li className>{loggeduser?.name}</li>
      </div>

      <div className={styles.container_menu}>
        <Link to={"/auth/liked"}>
          <li className={styles.background}>Gostei</li>
        </Link>
        <Link to={"/auth/disliked"}>
          <li className={styles.background}>Não Gostei</li>
        </Link>
        <Link to={"/auth/later"}>
          <li className={styles.background}>Ver mais Tarde</li>
        </Link>
      </div>

      <BarraNavegar />
    </ul>
  );
};
