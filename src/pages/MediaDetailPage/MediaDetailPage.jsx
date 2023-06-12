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
        <section class="about_section layout_padding">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="detail-box">
                            <div class="heading_container">
                                    <h2 style={{ color: 'white' }}>
                                    Detail
                                    </h2>
                            </div>
                            <br />
                            <MediaDetail media={media} handleDelete={handleDelete} setMedia={setMedia}></MediaDetail>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}