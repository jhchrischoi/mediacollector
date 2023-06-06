import { useState} from 'react'
import EditMediaForm from './EditMediaForm/EditMediaForm'
export default function MediaDetail({media, handleDelete, setMedia}){
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
                <h3>{media.name}</h3>
                <p>URL {media.url}</p>
                {/* { media.nowShowing && <p>Now Showing</p>} */}
                <button onClick={handleDelete}>DELETE {media.name}</button>
                <button onClick={toggleEditForm}>
                    {editFormIsOpen ? "Close Editor" : "Edit"}
                </button>
                { editFormIsOpen && 
                    <EditMediaForm media={media} setMedia={setMedia} setEditFormIsOpen={setEditFormIsOpen}></EditMediaForm>
                }
            </div>
        </>
    )
}