import { NavLink, Link } from 'react-router-dom';

const Header = () => {
    return(
        <header>
        <nav className="navbar navbar-dark bg-primary">
            <div className="container">
                <div casclassNames="row">
                    <div class="col-md-12">
                        <Link className="navbar-brand"  to="/">FS</Link>
                        <NavLink className="nav-link active" activeclassName='active' exact to="/">Home</NavLink>
                        <NavLink className="nav-link" activeclassName='active' to="/create">Create Furniture</NavLink>
                        <NavLink className="nav-link" activeclassName='active' to="/profile">My Furniture</NavLink>
                        <NavLink className="nav-link" activeclassName='active' to="#">Logout</NavLink>
                        <NavLink className="nav-link" activeclassName='active' to="/login">Login</NavLink>
                        <NavLink className="nav-link" activeclassName='active' to="/register">Register</NavLink>
                        <span>72 items in catalog</span>
                    </div>
                </div>
            </div>
        </nav>
    </header>
    );
}

export default Header;