import { moviesIndexRequest } from '../../utilities/movies-api';
import { useEffect, useState } from 'react'
import MoviesList from '../../components/MoviesList/MoviesList';

export default function MoviesIndexPage(){
    const [movies, setMovies] = useState([])
    useEffect(()=>{
        console.log('loading...')
        async function getMovies(){
            const movies = await moviesIndexRequest();
            setMovies(movies)
        }
        getMovies();
    }, [])
    return(
        <>
        <h1>Collections</h1>
        <MoviesList movies={movies}></MoviesList>
        </>
    )
}