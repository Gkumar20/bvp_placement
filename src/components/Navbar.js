import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom shadow p-3 mb-5 bg-white rounded">
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 15 15"><path fill="currentColor" d="M7.5 1L0 4.5l2 .9v1.7c-.6.2-1 .8-1 1.4s.4 1.2 1 1.4v.1l-.9 2.1C.8 13 1 14 2.5 14s1.7-1 1.4-1.9L3 10c.6-.3 1-.8 1-1.5s-.4-1.2-1-1.4V5.9L7.5 8L15 4.5L7.5 1zm4.4 6.5l-4.5 2L5 8.4v.1c0 .7-.3 1.3-.8 1.8l.6 1.4v.1c.1.4.2.8.1 1.2c.7.3 1.5.5 2.5.5c3.3 0 4.5-2 4.5-3v-3z"/></svg>
                <strong className="fs-3 text-secondary">BVP</strong>
                </a>

                <ul className="nav nav-pills">
                    <li className="nav-item"><Link to="/" className="nav-link " aria-current="page"><strong>Home</strong></Link></li>
                    <li className="nav-item"><Link to="/Placement" className="nav-link"><strong>Placement</strong></Link></li>
                    <li className="nav-item"><Link to="/About" className="nav-link"><strong>About</strong></Link></li>
                    <li className="nav-item"><Link to="/FAQs" className="nav-link"><strong>FAQs</strong></Link></li>
                    <li className="nav-item"><Link to="/Contact" className="nav-link"><strong>Contact</strong></Link></li>
                </ul>
            </header>
            {/* <div className="px-3 py-2 border-bottom mb-3">
                <div className="container d-flex flex-wrap justify-content-center">
                    <form className="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto">
                        <input type="search" className="form-control" placeholder="Search..." aria-label="Search" spellcheck="false" data-ms-editor="true" />
                    </form>

                    <div className="text-end">
                        <button type="button" className="btn btn-light text-dark me-2">Login</button>
                        <button type="button" className="btn btn-primary">Sign-up</button>
                    </div>
                </div>
            </div> */}
        </div>
    )
}
