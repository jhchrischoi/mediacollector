import { mediaIndexRequest } from '../../utilities/media-api';
import { useEffect, useState } from 'react'
import MediaList from '../../components/MediaList/MediaList';
import '../../fregg/css/bootstrap.css'
import '../../fregg/css/responsive.css'
import '../../fregg/css/style.css'
import '../../fregg/css/style.css.map'

export default function MediaIndexPage(){
    const [media, setMedia] = useState([])
    useEffect(()=>{
        console.log('loading...')
        async function getMedia(){
            const media = await mediaIndexRequest();
            setMedia(media)
        }
        getMedia();
        console.log("does it go through this everytime I load this page?")
    }, [])
    return(
        <>
            <section class="about_section layout_padding">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <div>
                                <div class="heading_container">
                                    <h2 style={{ color: 'white' }}>
                                        Collection List
                                    </h2>
                                </div>
                                <MediaList media={media}></MediaList>
                            </div>
                        </div>
                    </div>
                </div>
            </section>        
        </>
    )
}