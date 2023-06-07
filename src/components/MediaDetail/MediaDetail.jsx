import { useState, useEffect, useRef} from 'react'
import EditMediaForm from './EditMediaForm/EditMediaForm'
import { personalCollectionRequest, addVideoToCollection } from '../../utilities/collections-api'

export default function MediaDetail({media, handleDelete, setMedia}){
    const [editFormIsOpen, setEditFormIsOpen] = useState(false)
    function toggleEditForm(){
        setEditFormIsOpen((prevState) => {
            return !prevState
            }
        )
    }
    const [personalCollections, setPersonalCollections] = useState([])
    const selectedCollectionRef = useRef('')
    useEffect(()=>{
        async function getPersonalCollection(){
            const personalCollections = await personalCollectionRequest();
            setPersonalCollections(personalCollections)
        }
        getPersonalCollection();
    }, [])
// to figure out how it can call that request function we made
// 

    function handleAddVideo(e){
        e.preventDefault()
        console.log(selectedCollectionRef.current.value)
        // need two ids
        addVideoToCollection(selectedCollectionRef.current.value, media._id);
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
                <form onSubmit={handleAddVideo}>
                    <select ref={selectedCollectionRef}>
                        {personalCollections.map((collection) => (
                            <option key={collection._id} value={collection._id}>
                            {collection.title}
                            </option>
                        ))}
                    </select>
                    <button type="submit">Add to Collection</button>
                </form>
            </div>
        </>
    )
}