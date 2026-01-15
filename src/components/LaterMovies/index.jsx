import { BarraNavegar } from "../BarraNavegar"
import { CardFilmes } from "../CardFilmes"
import styles from "./later.module.css"

export const LaterMovies = () => {

    const later = JSON.parse(localStorage.getItem("later"))

    return (
        <div className={styles.container}>
            <h1 className={styles.later}>Ver mais Tarde</h1>
           {later?later.map((item)=> 
           <CardFilmes
           width="154" 
           key={item.id}
           pathImage={item.poster_path}
           movieName={item.title}
           movieId={item.id}
           />):""}
            <BarraNavegar/>
        </div>
    )
}