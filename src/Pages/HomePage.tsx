import { NavLink } from "react-router-dom"
import CurrentUser from "../components/controllers/CurrentUser"
import Navbar from "../components/controllers/Navbar"
import Footer from "../components/controllers/Footer"




export default function HomePage() {
  return (
    <>
      <Navbar />
      <div className="container-md pt-3">
        <div className="row dashboard-header">
          <CurrentUser />
          <h1 className="text-center text-warning">Welcome to Galaxtore.</h1>
          <p className="text-center mb-0">[ Premium Online Marketplace. ]</p>
        </div>

        {/* HERO SECTION */}
        <section className="my-2 py-1">
          <div className="row">
            <div className="col-md-7 pb-1">
              <h2 className="">
                Discover Products That <span className="text-danger">Elevate </span> <span className="text-warning">Your Lifestyle.</span>
              </h2>

              <p className="">
                Discover Yourself in a modern digital marketplace designed for
                speed, reliability, and premium shopping experiences.
                Browse curated products, discover exclusive deals, and enjoy a smooth
                shopping journey built for today’s connected world.
              </p>

              <p className="">
                From high-performance technology to everyday essentials,
                Galaxtore brings quality products directly to your screen.
              </p>
              <div className="">
                <NavLink to="/products" className="btn btn-outline-warning text-decoration-none">
                  Explore Featured Products
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
        </section>{/*End of Hero Section */}

        {/* Specials Section */}
        <section className="text-white py-2 mt-5 mb-5">
          <div className="card card-trans border border-dark text-white px-2 row ">
            <div className="text-center mt-2">
              <h3 className="text-warning">Premium Specials.</h3>
              <p>Explore a selection of premium items available inside Galaxtore.</p>
            </div>

            <div className="row justify-content-between mt-3">

              <div className="col-md-2 col-sm-10 my-1 mx-3  bg-black  p-2">
                <div className="card product-card border-bottom border-warning">
                  <div className="row m-4">
                    <span className="lead fw-bold text-white p-3">IMAGE</span>
                  </div>
                  {/* <img className="img-fluid" src="../assets/image.png" width="100px" height="100px" /> */}
                </div>

                <span className="lead text-white">Baggy T-Shirt</span>
                <p className="fw-bold text-danger small">MAGEEZ</p>
                <p className="text-white small mt-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

                <div className="row justify-content-between mt-0 mb-1">
                  <div className="col text-start me-2 mt-0">
                    <span className="text-warning fw-bold">$300</span>
                  </div>
                  <div className="col text-end pe-3 ms-2 mt-0 me-2">
                    <button className="btn btn-sm btn-outline-danger fw-bold">View</button>
                  </div>
                </div>
              </div>{/*End of Specials Product 1*/}

              <div className="col-md-2 col-sm-10 my-1 mx-3  bg-black  p-2">
                <div className="card product-card border-bottom border-warning">
                  <div className="row m-4">
                    <span className="lead fw-bold text-white p-3">IMAGE</span>
                  </div>
                  {/* <img className="img-fluid" src="../assets/image.png" width="100px" height="100px" /> */}
                </div>

                <span className="lead text-white">Baggy T-Shirt</span>
                <p className="fw-bold text-danger small">MAGEEZ</p>
                <p className="text-white small mt-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

                <div className="row justify-content-between mt-0 mb-1">
                  <div className="col text-start me-2 mt-0">
                    <span className="text-warning fw-bold">$300</span>
                  </div>
                  <div className="col text-end pe-3 ms-2 mt-0 me-2">
                    <button className="btn btn-sm btn-outline-danger fw-bold">View</button>
                  </div>
                </div>
              </div>{/*End of Specials Product 2*/}

              <div className="col-md-2 col-sm-10 my-1 mx-3  bg-black  p-2">
                <div className="card product-card border-bottom border-warning">
                  <div className="row m-4">
                    <span className="lead fw-bold text-white p-3">IMAGE</span>
                  </div>
                  {/* <img className="img-fluid" src="../assets/image.png" width="100px" height="100px" /> */}
                </div>

                <span className="lead text-white">Baggy T-Shirt</span>
                <p className="fw-bold text-danger small">MAGEEZ</p>
                <p className="text-white small mt-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

                <div className="row justify-content-between mt-0 mb-1">
                  <div className="col text-start me-2 mt-0">
                    <span className="text-warning fw-bold">$300</span>
                  </div>
                  <div className="col text-end pe-3 ms-2 mt-0 me-2">
                    <button className="btn btn-sm btn-outline-danger fw-bold">View</button>
                  </div>
                </div>
              </div>{/*End of Specials Product 3*/}

             <div className="col-md-2 col-sm-10 my-1 mx-3  bg-black  p-2">
                <div className="card product-card border-bottom border-warning">
                  <div className="row m-4">
                    <span className="lead fw-bold text-white p-3">IMAGE</span>
                  </div>
                  {/* <img className="img-fluid" src="../assets/image.png" width="100px" height="100px" /> */}
                </div>

                <span className="lead text-white">Baggy T-Shirt</span>
                <p className="fw-bold text-danger small">MAGEEZ</p>
                <p className="text-white small mt-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

                <div className="row justify-content-between mt-0 mb-1">
                  <div className="col text-start me-2 mt-0">
                    <span className="text-warning fw-bold">$300</span>
                  </div>
                  <div className="col text-end pe-3 ms-2 mt-0 me-2">
                    <button className="btn btn-sm btn-outline-danger fw-bold">View</button>
                  </div>
                </div>
              </div>{/*End of Specials Product 4*/}

              <div className="col-md-2 col-sm-10 my-1 mx-3  bg-black  p-2">
                <div className="card product-card border-bottom border-warning">
                  <div className="row m-4">
                    <span className="lead fw-bold text-white p-3">IMAGE</span>
                  </div>
                  {/* <img className="img-fluid" src="../assets/image.png" width="100px" height="100px" /> */}
                </div>

                <span className="lead text-white">Baggy T-Shirt</span>
                <p className="fw-bold text-danger small">MAGEEZ</p>
                <p className="text-white small mt-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

                <div className="row justify-content-between mt-0 mb-1">
                  <div className="col text-start me-2 mt-0">
                    <span className="text-warning fw-bold">$300</span>
                  </div>
                  <div className="col text-end pe-3 ms-2 mt-0 me-2">
                    <button className="btn btn-sm btn-outline-danger fw-bold">View</button>
                  </div>
                </div>
              </div>{/*End of Specials Product 5*/}

            </div>{/*End of Specials Row*/}

            <div className="row mt-3 mb-3 justify-content-center">
              <div className="col-md-4 ">
                <div className="row">
                  <NavLink to="/products" className="btn btn-outline-warning" >Proceed to Specials</NavLink>
                </div>
              </div>
            </div>

          </div>
        </section>{/*End of Hero Specials Section*/}

        {/* Category Section */}
        <section className="text-white py-2 mt-5 mb-5">
          <div className="card card-trans text-white px-2 row ">
            <div className="text-center mt-2">
              <h3 className="text-warning">Popular Categories.</h3>
              <p>Browse our top categories.</p>
            </div>

            <div className="row justify-content-between mt-3">

              <div className="col-md-2 col-sm-10 my-1 mx-3 card bg-black product-card p-2">
                <div className="border-bottom border-warning">
                  <div className="row m-4">
                    <span className="lead fw-bold text-white p-3">IMAGE</span>
                  </div>
                  {/* <img className="img-fluid" src="../assets/image.png" width="100px" height="100px" /> */}
                </div>

                <span className="lead text-white fw-bold text-center">Specials</span>
                <p className="text-secondary text-center small mt-2">125 items.</p>
              </div>{/*End of Category Product 1*/}

              <div className="col-md-2 col-sm-10 my-1 mx-3 card bg-black product-card p-2">
                <div className="border-bottom border-warning">
                  <div className="row m-4">
                    <span className="lead fw-bold text-white p-3">IMAGE</span>
                  </div>
                  {/* <img className="img-fluid" src="../assets/image.png" width="100px" height="100px" /> */}
                </div>

                <span className="lead text-white fw-bold text-center">Electronics</span>
                <p className="text-secondary text-center small mt-2">78 items.</p>
              </div>{/*End of Category Product 2*/}

              <div className="col-md-2 col-sm-10 my-1 mx-3 card bg-black product-card p-2">
                <div className="border-bottom border-warning">
                  <div className="row m-4">
                    <span className="lead fw-bold text-white p-3">IMAGE</span>
                  </div>
                  {/* <img className="img-fluid" src="../assets/image.png" width="100px" height="100px" /> */}
                </div>

                <span className="lead text-white fw-bold text-center">Accessories</span>
                <p className="text-secondary text-center small mt-2">63 items.</p>
              </div>{/*End of Category Product 3*/}

              <div className="col-md-2 col-sm-10 my-1 mx-3 card bg-black product-card p-2">
                <div className="border-bottom border-warning">
                  <div className="row m-4">
                    <span className="lead fw-bold text-white p-3">IMAGE</span>
                  </div>
                  {/* <img className="img-fluid" src="../assets/image.png" width="100px" height="100px" /> */}
                </div>

                <span className="lead text-white fw-bold text-center">Sound</span>
                <p className="text-secondary text-center small mt-2">937 items.</p>
              </div>{/*End of Category Product 4*/}

              <div className="col-md-2 col-sm-10 my-1 mx-3 card bg-black product-card p-2">
                <div className="border-bottom border-warning">
                  <div className="row m-4">
                    <span className="lead fw-bold text-white p-3">IMAGE</span>
                  </div>
                  {/* <img className="img-fluid" src="../assets/image.png" width="100px" height="100px" /> */}
                </div>

                <span className="lead text-white fw-bold text-center">Specials</span>
                <p className="text-secondary text-center small mt-2">125 items.</p>
              </div>{/*End of Category Product 5*/}

            </div>{/*End of Category Row*/}

            <div className="row mt-3 mb-3 justify-content-center">
              <div className="col-md-4 ">
                <div className="row">
                  <NavLink to="/products" className="btn btn-outline-warning" >Browse All Categories.</NavLink>
                </div>
              </div>
            </div>

          </div>
        </section>{/*End of Hero Category Section*/}
      </div>

      {/* Footer */}
      <Footer />
    </>
  )
}
