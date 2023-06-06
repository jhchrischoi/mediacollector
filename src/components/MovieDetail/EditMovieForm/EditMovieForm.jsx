import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom'
import { updateMovieRequest } from '../../../utilities/movies-api';

export default function EditMovieForm({movie, setMovie, setEditFormIsOpen}){
    const navigate = useNavigate();
    const titleRef = useRef(movie.title)
    const ratingRef = useRef(movie.rating)
    const [error, setError] = useState('')
    async function handleSubmit(e){
        e.preventDefault()
        const updatedMovie = {
            title: titleRef.current.value,
            rating: ratingRef.current.value,
        }
        try{
            const newMovie = await updateMovieRequest(movie._id, updatedMovie)
            setMovie(newMovie)
            setEditFormIsOpen(false)
        }catch(err){
            setError("Bad Update, Man")
        }
    }
    return(
        <>
        <h3>edit</h3>
        { error && <p>{JSON.stringify(error)}</p>}
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Collection Name</label>
                <input type="text" id="title" ref={titleRef} defaultValue={movie.title}/>
                <label htmlFor="rating">Source</label>
                <select name="rating" id="rating" ref={ratingRef} defaultValue={movie.rating}>
                    <option value="youtube">Youtube</option>
                    <option value="instagram">Instagram</option>
                    <option value="tictok">TicTok</option>
                    <option value="other">Other</option>
                </select>
                <button>Edit</button>
            </form>
            </>
    )
}