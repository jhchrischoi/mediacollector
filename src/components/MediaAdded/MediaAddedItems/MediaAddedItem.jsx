import {Link} from 'react-router-dom'

export default function MediaAddedItem({media}){
    return(
        <>
            <Link to={`/media/${media._id}`}>
                {media.name}
            </Link>
        </>
    )
}