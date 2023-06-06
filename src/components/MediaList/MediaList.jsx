import MediaListItem from './MediaListItem/MediaListItem'

export default function MediaList({media}){
    const mediaComponents = media.map(media => <MediaListItem key={media._id} media={media}></MediaListItem>)
    return (
        <>
            {mediaComponents}
        </>
    )
}