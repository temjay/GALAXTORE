import { NavLink } from "react-router-dom"
import Login from "../../components/controllers/Login"


function LoginPage() {
    return (
        <>
            <nav className="sticky-top p-3">
                <NavLink to="/" className="text-decoration-none text-danger "><h4 className="ms-4 m-1 fw-bold">GALAXTORE</h4></NavLink>
            </nav>
            <div className="row mt-5 mb-5 p-3 justify-content-center">
                <div className="col-4 m-3 card product-card">
                    <div className="card-header border-bottom border-danger">
                        <h5 className="text-warning text-center">LOGIN TO YOUR ACCOUNT</h5>
                    </div>
                    <div className="card-body mt-4 mb-2">
                        <Login />
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginPage
