import { useEffect, useState } from "react";
import styles from "./moviesdetails.module.css";
import { BarraNavegar } from "../../components/BarraNavegar";
import { MoviePoster } from "../../components/MoviePoster";
import { InfoMovie } from "../../components/InfoMovie";
import { useParams } from "react-router";
import { Loading } from "../../components/Loading";
import { ContainerLoading } from "../../components/ContainerLoading";
import { InteractionMovie} from "../../components/Hooks/InteractionMovie";
import { Button } from "../../components/Button";
import { ButtonInteraction } from "../../components/ButtonInteraction";

const API_KEY = import.meta.env.VITE_TMBD_API_KEY;

export const MoviesDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchMovie() {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=pt-BR`
        );
        if (!response.ok) {
          throw new Error("Erro ao acessar TMDB");
        }
        const data = await response.json();
        setMovie(data);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar filme", error);
      }
    }
    fetchMovie();
  }, [id]);

   const infos = {
     id: movie?.id,
     title: movie?.title,
     poster_path: movie?.poster_path
   }

  if (loading) {
    return (
     <ContainerLoading>
        <Loading/>
     </ContainerLoading>
    );
  }

  return (
    <div className={styles.movies_details}>
      {movie && (
        <div className={styles.movie_content}>
          <MoviePoster pathImage={movie.poster_path} movieName={movie.title} />
          <div className={styles.container_buttons}>
          <ButtonInteraction onClick={()=>InteractionMovie(infos,"like","GOSTEI")} caminho="/icons/like.png" id ={movie.id} chave="like"/>
          <ButtonInteraction onClick={()=>InteractionMovie(infos,"dislike","NÃO GOSTEI")} caminho="/icons/dislike.png" id ={movie.id} chave="dislike"/>
          <ButtonInteraction onClick={()=>InteractionMovie(infos,"later","VER MAIS TARDE")} caminho="/icons/later.png" id ={movie.id} chave="later"/>
        
          </div>

          <InfoMovie
            movieName={movie.title}
            genres={movie.genres}
            overview={movie.overview}
            runtime={movie.runtime}
            releaseDate={movie.release_date}
            productionCompanies={movie.production_companies}
          />
        </div>
      )}
      <BarraNavegar />
    </div>
  );
};
