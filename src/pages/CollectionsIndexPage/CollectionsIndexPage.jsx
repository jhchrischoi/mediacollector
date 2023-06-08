import { personalCollectionRequest } from '../../utilities/collections-api';
import { useEffect, useState } from 'react'
import CollectionsList from '../../components/CollectionsList/CollectionsList';

export default function CollectionsIndexPage(){
    const [collections, setCollections] = useState([])
    useEffect(()=>{
        console.log('loading...')
        async function getCollections(){
            const collections = await personalCollectionRequest();
            setCollections(collections)
        }
        getCollections();
    }, [])
    return(
        <>
        <h1>Collections</h1>
        <CollectionsList collections={collections}></CollectionsList>
        </>
    )
}