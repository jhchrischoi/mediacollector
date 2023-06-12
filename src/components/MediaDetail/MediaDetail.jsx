import { useState, useEffect, useRef} from 'react'
import EditMediaForm from './EditMediaForm/EditMediaForm'
import { personalCollectionRequest, addVideoToCollection } from '../../utilities/collections-api'
import '../../fregg/css/bootstrap.css'
import '../../fregg/css/responsive.css'
import '../../fregg/css/style.css'
import '../../fregg/css/style.css.map'

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
        setError('The Media Added!')
      }
    } catch (err) {
      console.error(err);
      setError('An error occurred');
    }
  }
    return (
        <>
            <div>
                <h3 style={{ color: 'white' }}>{media.name}</h3>
                <p style={{ color: 'white' }}><a href={media.url} target="_blank" rel="noopener noreferrer">{media.url}</a></p>
                <button onClick={handleDelete} class="media-detail">DELETE {media.name}</button>
                &nbsp; | &nbsp;
                <button onClick={toggleEditForm} class="media-detail">
                    {editFormIsOpen ? "Close Editor" : "Edit"}
                </button>

                { editFormIsOpen && 
                    <EditMediaForm media={media} setMedia={setMedia} setEditFormIsOpen={setEditFormIsOpen}></EditMediaForm>
                }
                <br />
                <br />
                <br />
                <div class="add-video-border">
                <form onSubmit={handleAddVideo}>
                    <select ref={selectedCollectionRef} class="select-collection">
                        {personalCollections.map((collection) => (
                            <option key={collection._id} value={collection._id}>
                            {collection.title}
                            </option>
                        ))}
                    </select>
                    <button type="submit" class="select-collection-button">Add to Collection</button>
                </form>
                </div>
                <br />
                <p className="error-message" class="error-message">&nbsp;{error}</p>
            </div>
        </>
    )
}