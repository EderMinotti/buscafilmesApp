import { BarraNavegar } from "../BarraNavegar";
import { CardFilmes } from "../CardFilmes";
import styles from "./dislikedmovies.module.css";

export const DislikedMovies = () => {
  const dislikeds = JSON.parse(localStorage.getItem("dislike"));

  return (
    <div className={styles.container}>
      <h1 className={styles.dislike}>Não Gostei</h1>
      {dislikeds
        ? dislikeds.map((item) => (
            <CardFilmes
              width="154"
              key={item.id}
              pathImage={item.poster_path}
              movieName={item.title}
              movieId={item.id}
            />
          ))
        : ""}
      <BarraNavegar />
    </div>
  );
};
