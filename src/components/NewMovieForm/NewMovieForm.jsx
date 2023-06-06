import { useRef, useState } from 'react';
import { createMovieRequest} from '../../utilities/movies-api';
import { useNavigate, useParams } from "react-router-dom";

export default function NewMovieForm(){
    const navigate = useNavigate();
    const titleRef = useRef('')
    const ratingRef = useRef('')
    const [error, setError] = useState('')
    async function handleSubmit(e){
        e.preventDefault()
        setError('')
        const newMovie = {
            title: titleRef.current.value,
            rating: ratingRef.current.value
        }
        try{
            const newMovieResponse = await createMovieRequest(newMovie)
            navigate('/movies')
        }catch(err){
            setError(err)
        }
        
    }
    return (
        <>
            { error && <p>{JSON.stringify(error)}</p>}
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Collection Name</label>
                    <input type="text" id="title" ref={titleRef} />
                    
                <label htmlFor="rating">Source</label>
                    <select name="rating" id="rating" ref={ratingRef}>
                        <option value="youtube">Youtube</option>
                        <option value="instagram">Instagram</option>
                        <option value="tictok">TicTok</option>
                        <option value="other">Other</option>
                </select>
                <button>Create</button>
            </form>
        </>

    )
}