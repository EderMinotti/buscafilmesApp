import styles from "./movieposter.module.css"

export const MoviePoster = ({ pathImage, movieName }) => {
    return (
        <div className={styles.movie_poster}>
        <img src={`https://image.tmdb.org/t/p/w400/${pathImage}`} alt={movieName} />
        </div>
    )
}