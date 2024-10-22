import { Link, NavLink } from "react-router-dom"
// data
import navigationLinks from "../../../data/navigationLinks"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                {/* home btn - link */}
                <Link className="fw-bold text-decoration-none text-dark fs-2" to="/">
                    Store
                </Link>

                {/* collapse btn */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#storeNavbar" aria-controls="storeNavbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* collapse - navigation links */}
                <div className="collapse navbar-collapse" id="storeNavbar">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
                        {navigationLinks.map(navigationLink => {
                            return <li key={navigationLink.label} className="nav-item">
                                <NavLink to={navigationLink.href} className='nav-link capitalize'>
                                    {navigationLink.label}
                                </NavLink>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar