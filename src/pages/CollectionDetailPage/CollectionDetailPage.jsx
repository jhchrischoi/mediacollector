import { useNavigate, useParams } from "react-router-dom";
import { getCollectionRequest, deleteCollectionRequest } from "../../utilities/collections-api";
import { useEffect, useState } from 'react';
import CollectionDetail from "../../components/CollectionDetail/CollectionDetail";
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
        </>
    )
}