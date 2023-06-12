import { useNavigate, useParams } from "react-router-dom";
import { getCollectionRequest, deleteCollectionRequest, addVideoToCollection } from "../../utilities/collections-api";
import { useEffect, useState } from 'react';
import CollectionDetail from "../../components/CollectionDetail/CollectionDetail";
import MediaAddedItem from "../../components/MediaAdded/MediaAddedItems/MediaAddedItem";
import '../../fregg/css/bootstrap.css'
import '../../fregg/css/responsive.css'
import '../../fregg/css/style.css'
import '../../fregg/css/style.css.map'


export default function CollectionDetailPage(){
    let { collectionId } = useParams();
    const [collection, setCollection] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    useEffect(()=>{
        async function getCollection(){
            const collection = await getCollectionRequest(collectionId);
            if(collection){
                setCollection(collection)
                setTimeout(()=>{
                    setLoading(false)
                }, 1000)
                console.log(collection.title)
            }else{
                setError('No Collection Found')
                setLoading(false)
            }
        }
        getCollection()
    }, [])

 
    async function handleDelete(e){
        const deleteResponse = await deleteCollectionRequest(collection._id);
        if(deleteResponse.data === 'success'){
            navigate('/collections')
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
                            <CollectionDetail collection={collection} handleDelete={handleDelete} setCollection={setCollection}></CollectionDetail>
                        </div>
                        <section class="about_section layout_padding">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <div>
                                <div class="heading_container">
                                    <h2 style={{ color: 'white' }}>
                                        Added
                                    </h2>
                                </div>
                                <br />
                                {collection.videos && collection.videos.map(media=> <MediaAddedItem key={media._id} media={media}></MediaAddedItem>)}
                            </div>
                        </div>
                    </div>
                </div>
            </section>        
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}