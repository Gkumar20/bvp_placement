import React from 'react'
// import Navbar from './Navbar'
import {
    Link
} from "react-router-dom";


export default function Cover() {
    return (
        <>

            <main className="shadow-lg p-3 mb-5 bg-white rounded">
                <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light shadow-lg p-3 mb-5 bg-white rounded">
                    <div className="col-md-10 p-lg-5 mx-auto my-5">
                        <h1 className="display-4 fw-normal"><strong>BHARATI VIDYAPEETH PLACEMENT</strong> </h1>
                        ***<hr />
                        <p className="lead fw-normal text-secondary">Welcome to this website on placements from Bharati Vidyapeeth, one of the leading educational institutions in India. Bharati Vidyapeeth has a reputation for producing talented and skilled graduates who are highly sought after by top companies around the world.
                        <hr />
                        Bharati Vidyapeeth has a dedicated placement cell that is responsible for organizing and coordinating the placement activities for its students.</p>
                        <Link className="btn btn-outline-dark shadow p-3 mb-5  rounded" to="/Placement">Go To Placement Cell</Link>
                    </div>
                    <div className="product-device shadow-sm d-none d-md-block"></div>
                    <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
                </div>

            </main>

            <footer className="container py-5">
                <div className="row">
                    <div className="col-12 col-md">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="d-block mb-2" role="img" viewBox="0 0 24 24"><title>Product</title><circle cx="12" cy="12" r="10"></circle><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"></path></svg>
                        <small className="d-block mb-3 text-muted">© 2022</small>
                    </div>
                    <div className="col-6 col-md">
                        <h5>Features</h5>
                        <ul className="list-unstyled text-small">
                            <li><a className="link-secondary" href="/">Cool stuff</a></li>
                            <li><a className="link-secondary" href="/">Random feature</a></li>
                            <li><a className="link-secondary" href="/">Team feature</a></li>
                            <li><a className="link-secondary" href="/">Stuff for developers</a></li>
                            <li><a className="link-secondary" href="/">Another one</a></li>
                            <li><a className="link-secondary" href="/">Last time</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        <h5>Resources</h5>
                        <ul className="list-unstyled text-small">
                            <li><a className="link-secondary" href="/">Resource name</a></li>
                            <li><a className="link-secondary" href="/">Resource</a></li>
                            <li><a className="link-secondary" href="/">Another resource</a></li>
                            <li><a className="link-secondary" href="/">Final resource</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        <h5>Resources</h5>
                        <ul className="list-unstyled text-small">
                            <li><a className="link-secondary" href="/">Business</a></li>
                            <li><a className="link-secondary" href="/">Education</a></li>
                            <li><a className="link-secondary" href="/">Government</a></li>
                            <li><a className="link-secondary" href="/">Gaming</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        <h5>About</h5>
                        <ul className="list-unstyled text-small">
                            <li><a className="link-secondary" href="/">Team</a></li>
                            <li><a className="link-secondary" href="/">Locations</a></li>
                            <li><a className="link-secondary" href="/">Privacy</a></li>
                            <li><a className="link-secondary" href="/">Terms</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}
