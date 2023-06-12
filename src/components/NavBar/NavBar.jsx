import { Link } from 'react-router-dom';
import { logOut } from '../../utilities/users-service';
import '../../fregg/css/bootstrap.css'
import '../../fregg/css/responsive.css'
import '../../fregg/css/style.css'
import '../../fregg/css/style.css.map'
// import '../../fregg/css/style.scss'


export default function NavBar({setUser, user}){
    function handleLogOut() {
        logOut();
        setUser(null);
    }
    return(
        <>
        <header class="header_section">
            <div class="container">
                <nav class="navbar navbar-expand-lg custom_nav-container pt-3">
                    <a class="navbar-brand mr-5">
                        <span>Welcome, {user.name}</span>
                    </a>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <div class="d-flex ml-auto flex-column flex-lg-row align-items-center">
                            <ul class="navbar-nav">
                                <li class="nav-item active">
                                    <a class="nav-link"><Link to="/" style={{ color: 'white' }}>Home Page</Link></a>
                                </li>
                                <li class="nav-item active">
                                    <a class="nav-link"><Link to="/collections" style={{ color: 'white' }}>My Collections</Link></a>
                                </li>
                                {/* <li class="nav-item">
                                    <a class="nav-link"><Link to="/collections/new" style={{ color: 'white' }}>Create a Collection</Link></a>
                                </li> */}
                                <li class="nav-item">
                                    <a class="nav-link"><Link to="/media" style={{ color: 'white' }}>All Media</Link></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link"><Link to="/media/new" style={{ color: 'white' }}>Save a Video/Photo</Link></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link"><Link to="" onClick={handleLogOut} style={{ color: 'white' }}>Log Out</Link></a>
                                </li>
                            </ul>
                            {/* <form class="form-inline">
                                <button class="btn  my-2 my-sm-0 nav_search-btn" type="submit"></button>
                            </form> */}
                        </div>
                    </div>
                </nav>
            </div>
        </header>
        </>
    )
}