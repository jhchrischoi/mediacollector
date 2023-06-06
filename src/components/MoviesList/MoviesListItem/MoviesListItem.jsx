import { Link } from 'react-router-dom'

export default function MoviesListItem({movie}){
    return(
        <>
        <p>
            <Link to={`/movies/${movie._id}`}>
                {movie.title}
            </Link>
        </p>
        </>
    )
}