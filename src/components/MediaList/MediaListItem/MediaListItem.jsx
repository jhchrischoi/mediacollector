import { Link } from 'react-router-dom'

export default function MediaListItem({media}){
    return(
        <>
        <p>
            <Link to={`/media/${media._id}`}>
                {media.name}
            </Link>
        </p>
        </>
    )
}