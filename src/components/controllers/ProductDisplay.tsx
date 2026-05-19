import { useNavigate } from "react-router-dom"
import { savedProducts } from "../repositories/productsRepo"

function ProductDisplay() {
    const productsArr = savedProducts()

    const navigate = useNavigate()

    function view(key)
    {
       navigate(`/products/view/${key}`)
    }

    return (
        <>
        {productsArr.map((product) => (
            <div className="col-md-2 col-5 mx-3 my-2 bg-black p-2" key={product.id}>
                <div className="border-bottom card product-card border-warning">
                    <div className="card-body row">
                        <img className="img-fluid rounded" src={product.image} />
                    </div>
                </div>

                <span className="lead text-white">{product.name}</span>
                <p className="fw-bold text-danger small">{product.brand}</p>

                <div className="row justify-content-between mt-0 mb-1">
                    <div className="col text-start me-2 mt-0">
                        <span className="text-warning fw-bold">${product.price}</span>
                    </div>
                    <div className="col text-end pe-3 ms-2 mt-0 me-2">
                        <button onClick={() => view(product.id)} className="btn small btn-outline-danger fw-bold">View</button>
                    </div>
                </div>
            </div>
            ))}
        </>
    )
}

export default ProductDisplay
