import Footer from "../components/controllers/Footer";
import Navbar from "../components/controllers/Navbar";
import ProductDisplay from "../components/controllers/ProductDisplay";


export default function ProductsPage() {
    return (
        <>
            <Navbar />
            <div className="container-xl pt-3">
                <div className="row dashboard-header">
                    <h2 className="text-center m-1 mb-1 text-warning">Products</h2>
                    <p className="text-center">Browse and shop the full Galaxtore catalog.</p>
                </div>
                <div className="row justify-content-between my-5">
                    <div className="col">
                        <span className="text-white">CATEGORY</span>
                        <div className="row">
                            <select className="bg-dark rounded border-warning text-warning" name="" id="">
                                <option value="">All</option>
                                <option value="">Electronics</option>
                            </select>
                        </div>
                    </div>
                    <div className="col ms-md-4">
                        <span className="text-white">PRICE</span>
                        <div className="row">
                            <select className="bg-dark rounded border-warning text-warning" name="" id="">
                                <option value="">All</option>
                                <option value="">Price</option>
                            </select>
                        </div>
                    </div>
                    <div className="col ms-md-4">
                        <span className="text-white">COLOR</span>
                        <div className="row">
                            <select className="bg-dark rounded border-warning text-warning" name="" id="">
                                <option value="">All</option>
                                <option className="text-black fw-bold" value="">Black</option>
                                <option className="text-danger fw-bold" value="">Red</option>
                                <option className="text-white fw-bold" value="">White</option>
                                <option className="text-primary fw-bold" value="">Blue</option>
                                <option className="text-success fw-bold" value="">Green</option>
                                <option className="text-warning fw-bold" value="">Yellow</option>
                            </select>
                        </div>
                    </div>
                    <div className="col ms-md-4">
                        <span className="text-white">DATE ADDED</span>
                        <div className="row">
                            <select className="bg-dark rounded border-warning text-warning" name="" id="">
                                <option value="">All</option>
                                <option value="">Date Added</option>
                            </select>
                        </div>
                    </div>
                </div> {/* endof filters */} 
            </div>
            <div className="px-md-4 px-3 row mt-3">
                    <ProductDisplay />
                </div>
            {/* Footer */}
            <Footer />
        </>
    )
}
