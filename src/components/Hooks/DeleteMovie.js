export function DeleteMovie(movieId, chave) {
    const stored = JSON.parse(localStorage.getItem({chave}))
    const updateMovies = stored.filter((filme)=> filme.id !== movieId)
    localStorage.setItem({chave}, JSON.stringify(updateMovies))
}