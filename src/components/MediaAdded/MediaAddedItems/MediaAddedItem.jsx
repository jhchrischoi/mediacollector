import {Link} from 'react-router-dom'

export default function MediaAddedItem({media}){
    return(
        <>
        <div>
            <Link to={`/media/${media._id}`}>
                {media.name}
            </Link>
        </div>
        </>
    )
}