import MoviesListItem from './MoviesListItem/MoviesListItem'

export default function MoviesList({movies}){
    const moviesComponents = movies.map(movie => <MoviesListItem key={movie._id} movie={movie}></MoviesListItem>)
    return (
        <>
            {moviesComponents}
        </>
    )
}