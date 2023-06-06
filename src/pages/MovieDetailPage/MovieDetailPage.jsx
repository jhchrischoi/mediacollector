import { useNavigate, useParams } from "react-router-dom";
import { getMovieRequest, deleteMovieRequest } from "../../utilities/movies-api";
import { useEffect, useState } from 'react';
import MovieDetail from "../../components/MovieDetail/MovieDetail";
export default function MovieDetailPage(){
    let { movieId } = useParams();
    const [movie, setMovie] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    useEffect(()=>{
        async function getMovie(){
            const movie = await getMovieRequest(movieId);
            if(movie){
                setMovie(movie)
                setTimeout(()=>{
                    setLoading(false)
                }, 1000)
            }else{
                setError('No Movie Found')
                setLoading(false)
            }
        }
        getMovie()
    }, [])

    async function handleDelete(e){
        const deleteResponse = await deleteMovieRequest(movie._id);
        if(deleteResponse.data === 'success'){
            navigate('/movies')
        }
    }
    return (
        <>
        <h1>List</h1>
        { loading ? <p>Loading....</p>
        :
        error ? <p>{error}</p> 
        :
        <MovieDetail movie={movie} handleDelete={handleDelete} setMovie={setMovie}></MovieDetail>
        }
        </>
    )
}