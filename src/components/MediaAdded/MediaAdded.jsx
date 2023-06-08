import MediaAddedItem from  './MediaAddedItems/MediaAddedItem'

export default function MediaAdded({media}){
    const mediaComponents = media.map(media => <MediaAddedItem key={media._id} media={media}></MediaAddedItem>)
    return (
        <>
        {mediaComponents}
        </>
    )
}