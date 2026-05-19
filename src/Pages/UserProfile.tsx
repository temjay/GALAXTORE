import { NavLink } from "react-router-dom"


function UserProfile() {
    return (
        <>
            <nav className="sticky-top p-3">
                <NavLink to="/" className="text-decoration-none text-danger "><h4 className="ms-4 m-1 fw-bold">GALAXTORE</h4></NavLink>
            </nav>
        </>
    )
}

export default UserProfile
