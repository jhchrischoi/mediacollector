import CollectionsListItem from './CollectionsListItem/CollectionsListItem'

export default function CollectionsList({collections}){
    const collectionsComponents = collections.map(collection => <CollectionsListItem key={collection._id} collection={collection}></CollectionsListItem>)
    return (
        <>
            {collectionsComponents}
        </>
    )
}