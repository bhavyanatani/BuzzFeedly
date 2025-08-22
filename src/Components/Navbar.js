import React from 'react'
import { Link } from "react-router-dom";

const NavBar = () => {

    return (
        <div>
                <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/" style={{ fontSize: '1.5rem' }}>BuzzFeedly</Link>
                    <div className="collapse navbar-collapse justify-content-center">
                        <ul className="navbar-nav gap-4 mb-2 mb-lg-0">
                            <li className="nav-item"><Link className="nav-link" aria-current="page" to="/" style={{ fontSize: '1.2rem', color: 'white' }}>All</Link></li>
                                
                            <li className="nav-item"><Link className="nav-link" to="/entertainment" style={{ fontSize: '1.2rem', color: 'white' }}>Entertainment</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/health" style={{ fontSize: '1.2rem', color: 'white' }}>Health</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/science" style={{ fontSize: '1.2rem', color: 'white' }}>Science</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/sports" style={{ fontSize: '1.2rem', color: 'white' }}>Sports</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/technology" style={{ fontSize: '1.2rem', color: 'white' }}>Technology</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )

}

export default NavBar