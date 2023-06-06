import { mediaIndexRequest } from '../../utilities/media-api';
import { useEffect, useState } from 'react'
import MediaList from '../../components/MediaList/MediaList';

export default function MediaIndexPage(){
    const [media, setMedia] = useState([])
    useEffect(()=>{
        console.log('loading...')
        async function getMedia(){
            const media = await mediaIndexRequest();
            setMedia(media)
        }
        getMedia();
    }, [])
    return(
        <>
        <h1>Collections</h1>
        <MediaList media={media}></MediaList>
        </>
    )
}