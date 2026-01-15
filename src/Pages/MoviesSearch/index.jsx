import { useEffect, useState } from "react";
import { Input } from "../../components/Input";
import styles from "./moviessearch.module.css";
import { CardFilmes } from "../../components/CardFilmes";
import { BarraNavegar } from "../../components/BarraNavegar";
import { Typograph } from "../../components/Typograph";
import { Button } from "../../components/Button";
import { ContainerLoading } from "../../components/ContainerLoading";
import { Loading } from "../../components/Loading";


const API_KEY = import.meta.env.VITE_TMBD_API_KEY;

export const MoviesSearch = () => {

 
  const [movies, setMovies] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [searchMovie, setSearchMovies] = useState("");
  const [loading,setLoading] = useState(false)

  const moviesWithPoster = movies.filter((filme) => filme.poster_path )

  function handleSubmit(e) {
    e.preventDefault();
    setSearchMovies(inputValue);
  }

  useEffect(() => {
    async function moviesFetch() {
      try {
        setLoading(true)
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchMovie}&include_adult=false&language=pt-BR`
        );
        const data = await response.json();
        if (data) {
          setMovies(data.results);
          
        }
      } catch (error) {
        console.error("Erro na requisição da Api", error);
      }
      finally {
        setLoading(false)
      }
    }
    moviesFetch();
  }, [searchMovie]);


  if (loading) {
    return (
      <ContainerLoading>
        <Loading/>
      </ContainerLoading>
    )
  }

  return (
    <div className={styles.container_movies}>
      <form onSubmit={handleSubmit}>
        <div className={styles.container_input}>
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Pesquise por um título"
          />
        </div>
      </form>
      <div className={styles.container_search}>
      {searchMovie ?
        moviesWithPoster.map((filme) => (
          <CardFilmes
            width="342"
            key={filme.id}
            movieId={filme.id}
            pathImage={filme.poster_path}
            movieName={filme.title}
          />
        )): <div className={styles.subtitulo}>
          <Typograph variant="subtitulo" >Pesquise seu filme favorito...</Typograph>
          <img src="/icons/search.png" alt="" />
        </div>}
      </div>
        
        
      <BarraNavegar />
    </div>
  );
};
