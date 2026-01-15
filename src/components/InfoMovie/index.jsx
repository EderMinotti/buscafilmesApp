import styles from "./infomovie.module.css"

export const InfoMovie = ({ movieName, genres, overview, runtime,releaseDate, productionCompanies}) => {
    return (
        <ul className={styles.info_movie}>
            <li>Titulo: {movieName}</li>
            <li>Gênero: {genres.map((genre)=> genre.name).join(",")} </li>
            <li>Sinopse: {overview}</li>
            <li>Duração: {runtime}min</li>
            <li>Data de lançamento: {releaseDate}</li>
            <li>Produtora: {productionCompanies.map((item)=> item.name).join(",")}</li>
        </ul>
    )
}