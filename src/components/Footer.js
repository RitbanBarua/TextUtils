import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer(props) {
    return (
        <>
            <footer className={`d-flex flex-wrap justify-content-between align-items-center py-3 px-5 my-4 border-top border-dark-subtle footer-${props.mode}`}>
                <p className="col-md-4 mb-0 text-muted">© 2022 Company, Inc</p>

                <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                    <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"/></svg>
                </a>

                <ul className="nav col-md-4 justify-content-end">
                    <li className="nav-item"><Link to="/" className="nav-link px-2 text-muted">Home</Link></li>
                    {/* <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Features</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Pricing</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">FAQs</a></li> */}
                    <li className="nav-item"><Link to="/about" className="nav-link px-2 text-muted">About</Link></li>
                </ul>
            </footer>
        </>
    )
}
