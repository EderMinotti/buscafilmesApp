import { BarraNavegar } from "../BarraNavegar";
import { CardFilmes } from "../CardFilmes";
import styles from "./likedmovies.module.css";

export const LikedMovies = () => {
  const likeds = JSON.parse(localStorage.getItem("like"));

  return (
    <div className={styles.container}>
      <h1 className={styles.like}>Gostei</h1>
      {likeds
        ? likeds.map((item) => (
            <CardFilmes
              width="154"
              key={item.id}
              pathImage={item.poster_path}
              movieName={item.title}
              movieId={item.id}
              chave="like"
            />
          ))
        : ""}
      <BarraNavegar />
    </div>
  );
};
