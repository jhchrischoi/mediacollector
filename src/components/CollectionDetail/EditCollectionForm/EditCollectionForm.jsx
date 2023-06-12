import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom'
import { updateCollectionRequest } from '../../../utilities/collections-api';
import '../../../fregg/css/bootstrap.css'
import '../../../fregg/css/responsive.css'
import '../../../fregg/css/style.css'
import '../../../fregg/css/style.css.map'

export default function EditCollectionForm({collection, setCollection, setEditFormIsOpen}){
    const navigate = useNavigate();
    const titleRef = useRef(collection.title)
    const ratingRef = useRef(collection.rating)
    const [error, setError] = useState('')
    async function handleSubmit(e){
        e.preventDefault()
        const updatedCollection = {
            title: titleRef.current.value,
            rating: ratingRef.current.value,
        }
        try{
            const newCollection = await updateCollectionRequest(collection._id, updatedCollection)
            setCollection(newCollection)
            setEditFormIsOpen(false)
        }catch(err){
            setError("Bad Update, Man")
        }
    }
    return(
        <>
        <br />
        <br />
        <br />
        <section class="contact_section">
        <div class="container contact_bg layout_padding2-top">
            <h2 class="create-new-border">Edit</h2>
            <br />
            <br />
            <br />
            <div class="row">
                <div class="col-md-6">
                    <div class="contact_form ">
                    { error && <p>{JSON.stringify(error)}</p>}
                <form onSubmit={handleSubmit}>
                <label htmlFor="title">Collection Name</label>
                <input type="text" id="title" ref={titleRef} defaultValue={collection.title}/>
                {/* <label htmlFor="rating">Source</label>
                <select name="rating" id="rating" ref={ratingRef} defaultValue={collection.rating}>
                    <option value="youtube">Youtube</option>
                    <option value="instagram">Instagram</option>
                    <option value="tictok">TicTok</option>
                    <option value="other">Other</option>
                </select> */}
                <button>Edit</button>
            </form>
                    </div>
                </div>
            </div>
        </div>
        </section>
        
        
            </>
    )
}