import { Link } from 'react-router-dom';
import { logOut } from '../../utilities/users-service';

export default function NavBar({setUser, user}){
    function handleLogOut() {
        logOut();
        setUser(null);
    }
    return(
        <>
            <nav>
                <span>Welcome, {user.name}</span>
                &nbsp; | &nbsp;
                <Link to="/movies">All Collections</Link>
                &nbsp; | &nbsp;
                <Link to="/movies/new">Create a Collection</Link>
                &nbsp; | &nbsp;
                <Link to="/media">All Media</Link>
                &nbsp; | &nbsp;
                <Link to="/media/new">Save a Video/Photo</Link>
                &nbsp; | &nbsp;
                <Link to="" onClick={handleLogOut}>Log Out</Link>
                

            </nav>
        </>
    )
}