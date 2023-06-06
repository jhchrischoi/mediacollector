import { useRef, useState } from 'react';
import { createMediaRequest} from '../../utilities/media-api';
import { useNavigate, useParams } from "react-router-dom";

export default function NewMediaForm(){
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
    return (
        <>
            { error && <p>{JSON.stringify(error)}</p>}
            <form onSubmit={handleSubmit}>
                <label htmlFor="media-name">Name</label>
                <input type="text" id="name" ref={nameRef} />
                <label htmlFor="media-url">URL</label>
                <input type="text" id="url" ref={urlRef}/>
                <button>Create</button>
            </form>
        </>

    )
}