import { useRef, useState } from 'react';
import { createCollectionRequest} from '../../utilities/collections-api';
import { useNavigate, useParams } from "react-router-dom";

export default function NewCollectionForm(){
    const navigate = useNavigate();
    const titleRef = useRef('')
    // const ratingRef = useRef('')
    const [error, setError] = useState('')
    async function handleSubmit(e){
        e.preventDefault()
        setError('')
        const newCollection = {
            title: titleRef.current.value,
            // rating: ratingRef.current.value
        }
        try{
            const newCollectionResponse = await createCollectionRequest(newCollection)
            navigate('/collections')
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
                    
                <button>Create</button>
            </form>
        </>

    )
}