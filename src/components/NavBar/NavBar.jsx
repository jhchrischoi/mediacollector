import { Link } from 'react-router-dom';
import { logOut } from '../../utilities/users-service';
import './NavBar.css';
export default function NavBar({setUser, user}){
    function handleLogOut() {
        logOut();
        setUser(null);
    }
    return(
        <>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto align-items-center">
                <span>Welcome, {user.name}</span>
                &nbsp; | &nbsp;
                <Link class="nav-item" to="/collections">All Collections</Link>
                &nbsp; | &nbsp;
                <Link class="nav-item" to="/collections/new">Create a Collection</Link>
                &nbsp; | &nbsp;
                <Link class="nav-item" to="/media">All Media</Link>
                &nbsp; | &nbsp;
                <Link class="nav-item" to="/media/new">Save a Video/Photo</Link>
                &nbsp; | &nbsp;
                <Link class="nav-item" to="" onClick={handleLogOut}>Log Out</Link>
                </ul>
            </div>
        </>
    )
}