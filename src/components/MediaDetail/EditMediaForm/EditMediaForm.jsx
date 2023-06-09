import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom'
import { updateMediaRequest } from '../../../utilities/media-api';
import '../../../fregg/css/bootstrap.css'
import '../../../fregg/css/responsive.css'
import '../../../fregg/css/style.css'
import '../../../fregg/css/style.css.map'

export default function EditMediaForm({media, setMedia, setEditFormIsOpen}){
    const navigate = useNavigate();
    const nameRef = useRef(media.name)
    const urlRef = useRef(media.url)
    const [error, setError] = useState('')
    async function handleSubmit(e){
        e.preventDefault()
        const updatedMedia = {
            name: nameRef.current.value,
            url: urlRef.current.value
        }
        try{
            const newMedia = await updateMediaRequest(media._id, updatedMedia)
            setMedia(newMedia)
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
                <label htmlFor="media-name">Name</label>
                <input type="text" id="name" ref={nameRef} defaultValue={media.name}/>
                <label htmlFor="media-url">URL</label>
                <input type="number" id="url" ref={urlRef} defaultValue={media.url}/>
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