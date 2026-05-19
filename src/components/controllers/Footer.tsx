import { NavLink } from "react-router-dom"

function Footer() {
    return (
        <>
            <div className="row mt-5 bg-black border-top border-dark flex pb-2">
                <div className="container-md">
                    <div className="row px-3 py-4 justify-content-center">
                        <div className="col-4 me-2">
                            <span className="fw-bold">Brief About</span>
                        </div>
                        <div className="col-3 me-2">
                            <span className="fw-bold">Quick Links</span>
                            <div className="row">
                                    <NavLink to="/" className="text-warning">Home</NavLink>
                                    <NavLink to="/products" className="text-warning">Products</NavLink>
                                    <NavLink to="/about" className="text-warning">About</NavLink>
                                    <NavLink to="/profile" className="text-warning">Profile</NavLink>
                            </div>

                        </div>
                        <div className="col-3 ms-2">
                            <span className="fw-bold">Customer Support</span>
                        </div>
                    </div>
                    <div className="row mt-3 justify-content-center">
                        <div className="col-4 text-center">
                            © 2026 Galaxtore. All Rights Reserved.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
