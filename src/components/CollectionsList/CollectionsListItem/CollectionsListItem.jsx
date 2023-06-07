import { Link } from 'react-router-dom'

export default function CollectionsListItem({collection}){
    return(
        <>
        <p>
            <Link to={`/collections/${collection._id}`}>
                {collection.title}
            </Link>
        </p>
        </>
    )
}