import { useState} from 'react'
import EditMovieForm from './EditMovieForm/EditMovieForm'
export default function MovieDetail({movie, handleDelete, setMovie}){
    const [editFormIsOpen, setEditFormIsOpen] = useState(false)
    function toggleEditForm(){
        setEditFormIsOpen((prevState) => {
            return !prevState
            }
        )
    }
    return (
        <>
            <div>
                <h3>{movie.title}</h3>
                {/* <p>Released: {movie.releaseYear}</p> */}
                <p>Source {movie.rating}</p>
                {/* { movie.nowShowing && <p>Now Showing</p>} */}
                <button onClick={handleDelete}>DELETE {movie.title}</button>
                <button onClick={toggleEditForm}>
                    {editFormIsOpen ? "Close Editor" : "Edit"}
                </button>
                { editFormIsOpen && 
                    <EditMovieForm movie={movie} setMovie={setMovie} setEditFormIsOpen={setEditFormIsOpen}></EditMovieForm>
                }
            </div>
        </>
    )
}