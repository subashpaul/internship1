import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar
    () {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand mx-3" to="/">FoodZilla</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active mx-3" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="nav-link" to="/">Specialities</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="nav-link" to="/">Location</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="nav-link" to="/">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
