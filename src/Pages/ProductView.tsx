
import AddToCart from "../components/controllers/addToCart"
import Navbar from "../components/controllers/Navbar"
import { productIdentify } from "../components/controllers/productIdentify"

function ProductView() {

    const product = productIdentify()

    if (!product) {
        return (
            <>
                <div className="p-4 mt-5">
                    <h2 className="text-white text-center">Oops..!</h2>
                    <p className="text-center"><span className="text-white">Product Not Found!</span></p>
                </div>
            </>
        )
    }

    return (
        <>
            <Navbar />
            <div className="container-md">
                <h1 className="text-center m-3 mb-5 text-warning">Product Details</h1>

                <div className="row justify-content-center mb-5 mt-3">

                    <div className="col-md me-md-5 mt-3 mb-md-5 pb-md-5">
                        <img src={product.image} alt="" className="img-fluid rounded border-black" />
                    </div>

                    <div className="col-md ms-3 mt-1 p-1 ">
                        <div className="row mb-1">
                            <h1 className="display-6 text-white mb-0">{product.name}</h1>
                            <h5 className="mt-0 fw-bold text-danger">{product.brand}</h5>

                            <p className="text-warning fw-bold lead mb-0">
                                <span className="text-white fw-normal">Price: </span>${product.price}
                            </p>
                        </div>
                        <span className="lead fw-bold text-warning">Description</span>
                        <div className="row">
                            <p className="text-white">
                                {product.description}
                            </p>
                        </div>
                        <AddToCart />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductView
