import { Link } from "react-router";
import styles from "./cardfilmes.module.css";


export const CardFilmes = ({ pathImage, movieName, movieId, width }) => {
  return (
    <div>
      <Link to={`/auth/details/${movieId}`}>
        <div className={styles.card_filmes}>
          <img
            src={`https://image.tmdb.org/t/p/w${width}${pathImage}`}
            alt={`imagem do poster do filme:${movieName}`}
          />
        </div>
      </Link>
    </div>
  );
};
