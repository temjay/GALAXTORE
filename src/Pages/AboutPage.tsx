import { NavLink } from "react-router-dom";
import Footer from "../components/controllers/Footer";
import Navbar from "../components/controllers/Navbar";


export default function AboutPage() {
    return (
        <>
            {/* Navbar */}
            <Navbar />

            <div className="container-md p-3">
                <div className="row dashboard-header">
                    <h1 className="text-center text-warning">About Us</h1>
                </div>

                <div className="row">
                    <div className="col-md-7 pb-1">
                        <h2 className="">
                            ABOUT <span className="fw-bold text-danger">GALAXTORE.</span>
                        </h2>

                        <p className="">
                            Discover Yourself in a modern digital marketplace designed for
                            speed, reliability, and premium shopping experiences.
                            Browse curated products, discover exclusive deals, and enjoy a smooth
                            shopping journey built for today`s connected world.
                        </p>

                        <p className="">
                            From high-performance technology to everyday essentials,
                            Galaxtore brings quality products directly to your screen.
                        </p>
                        <div className="">
                            <NavLink to="/contacts" className="btn btn-outline-warning text-decoration-none">
                                Contact Us
                            </NavLink>
                        </div>
                    </div>

                    <div className="col ms-5 card card-trans">
                        <div className="row">
                            <div className="row ps-5 pt-5">
                                <h1 className="display-1 fw-bold text-white pt-5">IMAGE</h1>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Norms */}
                <div className="row mt-5">
                    <div className="row justify-content-between">
                        <div className="col me-1 pb-3 py-2 rounded bg-trans-yellow">
                            <p className="text-center lead text-warning">
                                Our Mission
                            </p>
                            <div className="row px-3 mt-2">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, quidem obcaecati fuga iure est,
                                vero ab voluptatum dolorum eveniet neque quasi provident reprehenderit! Laudantium?
                            </div>
                        </div>
                        <div className="col ms-2 py-2 pb-3 rounded bg-trans-yellow">
                            <p className="text-center lead text-warning">
                                Our Values
                            </p>
                            <div className="row px-3 mt-2">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis doloribus eius quod earum consequatur
                                in nostrum, recusandae quisquam inventore suscipit, soluta, nesciunt neque cumque. Quo repudiandae autem sit itaque aliquam doloremque vitae?
                            </div>
                        </div>
                    </div>
                </div>

                {/* Testimonials */}
                <div className="row mt-5">
                    <p className="text-center lead fw-bold text-warning mb-0"><h3>Meet Our Team</h3></p>
                    <div className="row justify-content-between">
                        <div className="col me-1 pb-3 py-2 rounded bg-black">
                            <div className="border-bottom border-warning">
                                <div className="row m-4 p-5">
                                    <span className="lead fw-bold text-white p-5">IMAGE</span>
                                </div>
                                {/* <img className="img-fluid" src="../assets/image.png" width="100px" height="100px" /> */}
                            </div>
                            <p className="text-center fw-bold text-light lead">
                                - SEAN -
                            </p>
                            <p className="text-secondary text-center">
                                Founder & CEO
                            </p>
                        </div>
                        <div className="col me-1 pb-3 py-2 rounded bg-black">
                            <div className="col me-1 pb-3 py-2 rounded bg-black">
                                <div className="border-bottom border-warning">
                                    <div className="row m-4 p-5">
                                        <span className="lead fw-bold text-white p-5">IMAGE</span>
                                    </div>
                                    {/* <img className="img-fluid" src="../assets/image.png" width="100px" height="100px" /> */}
                                </div>
                                <p className="text-center fw-bold text-light lead">
                                    - TEMJAY -
                                </p>
                                <p className="text-secondary text-center">Co-Founder & Dev</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Testimonials */}
                <div className="row mt-5">
                    <p className="text-center lead fw-bold text-warning mb-0"><h3>Our Customers Reviews</h3></p>
                    <div className="row justify-content-between">
                        <div className="col me-1 pb-3 py-2 rounded bg-trans-yellow">
                            <p className="text-center fw-bold lead text-warning">"</p>
                            <div className="row text-small px-3 mt-2">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis doloribus eius quod earum consequatur
                                in nostrum, recusandae quisquam inventore suscipit, soluta, nesciunt neque cumque. Quo repudiandae autem sit itaque aliquam doloremque vitae?
                            </div>
                            <p className="text-center text-warning">
                                - Anenyasha -
                            </p>
                        </div>
                        <div className="col ms-2 py-2 pb-3 rounded bg-trans-yellow">
                            <p className="text-center fw-bold lead text-warning">"</p>
                            <div className="row text-small px-3 mt-2">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis doloribus eius quod earum consequatur
                                in nostrum, recusandae quisquam inventore suscipit, soluta, nesciunt neque cumque. Quo repudiandae autem sit itaque aliquam doloremque vitae?
                            </div>
                            <p className="text-center text-warning">
                                - John. K -
                            </p>
                        </div>
                        <div className="col ms-2 py-2 pb-3 rounded bg-trans-yellow">
                            <p className="text-center fw-bold lead text-warning">"</p>
                            <div className="row text-small px-3 mt-2">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis doloribus eius quod earum consequatur
                                in nostrum, recusandae quisquam inventore suscipit, soluta, nesciunt neque cumque. Quo repudiandae autem sit itaque aliquam doloremque vitae?
                            </div>
                            <p className="text-center text-warning">
                                - Joshua -
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer */}
            <Footer />
        </>
    )
}
