import { useState, useEffect, useRef} from 'react'
import EditCollectionForm from './EditCollectionForm/EditCollectionForm'
import { createMediaRequest} from '../../utilities/media-api';
import { useNavigate, useParams } from "react-router-dom";
import React from 'react'

export default function CollectionDetail({collection, handleDelete, setCollection, media}){
    const [editFormIsOpen, setEditFormIsOpen] = useState(false)
    function toggleEditForm(){
        setEditFormIsOpen((prevState) => {
            return !prevState
            }
        )
    }

    const [selectedMedia, setSelectedMedia] = useState('');
    const navigate = useNavigate();
    const nameRef = useRef('')
    const urlRef = useRef('')
    const [error, setError] = useState('')
    async function handleSubmit(e){
        e.preventDefault()
        setError('')
        const newMedia = {
            name: nameRef.current.value,
            url: urlRef.current.value
        }
        try{
            const newMediaResponse = await createMediaRequest(newMedia)
            navigate('/media')
        }catch(err){
            setError(err)
        }
        
    }
    const handleSelectChange = (event) => {
        setSelectedMedia(event.target.value);
      };
    
    return (
        <>
            <div>
                <h4 style={{ color: 'white' }}>{collection.title}</h4>
                <button onClick={handleDelete} class="plus-button">DELETE {collection.title}</button>
                &nbsp; | &nbsp;
                <button onClick={toggleEditForm} class="plus-button">
                    {editFormIsOpen ? "Close Editor" : "Edit"}
                </button>
                { editFormIsOpen && 
                    <EditCollectionForm collection={collection} setCollection={setCollection} setEditFormIsOpen={setEditFormIsOpen}></EditCollectionForm>
                }
            </div>
            <div>
                <div id="all-media-added">
                    <form id="media-to-add" onSubmit={handleSubmit}>
                    
                    </form>
                </div>
            </div>
        </>
    )
}
