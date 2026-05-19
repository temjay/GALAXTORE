import { NavLink } from "react-router-dom"
import ProductCreate from "../components/controllers/ProductCreate"


function ProductCreatePage() {
    return (
        <>
            <nav className="sticky-top p-3">
                <NavLink to="/" className="text-decoration-none text-danger "><h4 className="ms-4 m-1 fw-bold">GALAXTORE</h4></NavLink>
            </nav>
            <div className="container-md pt-3">
                <div className="row justify-content-center">
                    <div className="col-md-5 my-3 card product-card">
                        <div className="card-header border-bottom border-danger">
                            <h5 className="text-warning text-center">CREATE PRODUCT</h5>
                        </div>
                        <div className="card-body">
                            <ProductCreate />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCreatePage
