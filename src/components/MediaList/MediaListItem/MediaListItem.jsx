import { Link } from 'react-router-dom'

export default function MediaListItem({media}){
    return(
        <>
        <p>
            <Link to={`/media/${media._id}`} style={{ color: '#e93f1a' }}>
                {media.name}
            </Link>
        </p>
        </>
    )
}