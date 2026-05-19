import { NavLink } from "react-router-dom"
import Search from "./Search"


export default function Navbar() {
  return (
    <>

        <nav className="sticky-top bg-black d-none d-md-block p-3 border-bottom border-dark">
          <div className="row justify-content-between text-warning">

            <div className="col-md-2 justify-content-start">
              <div className="row">
                <NavLink to="/" className="text-decoration-none text-danger"><span className="lead fw-bold">GALAXTORE</span></NavLink>
              </div>
            </div>

            <div className="col text-start me-3 mt-1">
              <div className="row justify-content-between">
                <div className="col-4 text-center">
                  <div className="row">
                    <NavLink to="/" className="text-decoration-none text-warning">Home</NavLink>
                  </div>
                </div>
                <div className="col-4 text-center">
                  <div className="row">
                    <NavLink to="/products" className="text-decoration-none text-warning">Products</NavLink>
                  </div>
                </div>
                <div className="col-4 text-center">
                  <div className="row">
                    <NavLink to="/about" className="text-decoration-none text-warning">About</NavLink>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-4 text-center mt-1">
              <div className="row">
                <Search />
              </div>
            </div>

            <div className="col-2 text-end ms-3 mt-1">
              <div className="row justify-content-end">
                <div className="col text-center">
                  <div className="row">
                    <NavLink to="/profile" className="text-decoration-none text-warning">You</NavLink>
                  </div>
                </div>
                <div className="col">
                  <div className="row">
                    Wish
                  </div>
                </div>
                <div className="col">
                  <div className="row">
                    Cart
                  </div>
                </div>
              </div>
            </div>

          </div>
        </nav>

    </>
  )
}
