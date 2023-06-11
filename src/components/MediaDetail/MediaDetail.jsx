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
const [error, setError]=useState('');
async function handleAddVideo(e) {
    e.preventDefault();
    try {
      console.log(selectedCollectionRef.current.value);
      const response = await addVideoToCollection(selectedCollectionRef.current.value, media._id);
      
      // Check if the response contains an error message
      if (response === 'Video Already Added') {
        setError('This Media Is Already Added');
      } else {
        // Handle the successful response
      }
    } catch (err) {
      console.error(err);
      setError('An error occurred');
    }
  }
    return (
        <>
            <div>
                <h3>{media.name}</h3>
                <p>URL {media.url}</p>
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
                <p className="error-message">&nbsp;{error}</p>
            </div>
        </>
    )
}