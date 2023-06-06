import { useNavigate, useParams } from "react-router-dom";
import { getMediaRequest, deleteMediaRequest } from "../../utilities/media-api";
import { useEffect, useState } from 'react';
import MediaDetail from "../../components/MediaDetail/MediaDetail";
export default function MediaDetailPage(){
    let { mediaId } = useParams();
    const [media, setMedia] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    useEffect(()=>{
        async function getMedia(){
            const media = await getMediaRequest(mediaId);
            if(media){
                setMedia(media)
                setTimeout(()=>{
                    setLoading(false)
                }, 1000)
            }else{
                setError('No Media Found')
                setLoading(false)
            }
        }
        getMedia()
    }, [])

    async function handleDelete(e){
        const deleteResponse = await deleteMediaRequest(media._id);
        if(deleteResponse.data === 'success'){
            navigate('/media')
        }
    }
    return (
        <>
        <h1>List</h1>
        { loading ? <p>Loading....</p>
        :
        error ? <p>{error}</p> 
        :
        <MediaDetail media={media} handleDelete={handleDelete} setMedia={setMedia}></MediaDetail>
        }
        </>
    )
}