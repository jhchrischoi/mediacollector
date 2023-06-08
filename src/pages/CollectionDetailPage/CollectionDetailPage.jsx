import { useNavigate, useParams } from "react-router-dom";
import { getCollectionRequest, deleteCollectionRequest, addVideoToCollection } from "../../utilities/collections-api";
import { useEffect, useState } from 'react';
import CollectionDetail from "../../components/CollectionDetail/CollectionDetail";
import MediaAddedItem from "../../components/MediaAdded/MediaAddedItems/MediaAddedItem";

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
        <h1>List</h1>
        { loading ? <p>Loading....</p>
        :
        error ? <p>{error}</p> 
        :
        <CollectionDetail collection={collection} handleDelete={handleDelete} setCollection={setCollection}></CollectionDetail>
        }
        <div>
        <h1>Added</h1>
        {collection.videos && collection.videos.map(media=> <MediaAddedItem key={media._id} media={media}></MediaAddedItem>)
        }
        </div>
        </>
    )
}