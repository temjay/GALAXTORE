import { useState } from "react"
import { registerAct } from "../actions/registerAction"
import type { User } from "../contracts/userInterface"


function Register() {

    const [firstName, setFirstName] = useState<string>('')
    const [lastName, setLastName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [password2, setPassword2] = useState<string>('')

    const User: User = {
        firstName,
        lastName,
        email,
        password
    }

    function handleSubmit(e: any) {
        e.preventDefault()
        registerAct(User, password2)
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="mx-5 mt-3">
                <label htmlFor="firstname" className="text-white lead">First Name:</label><br />
                <div className="row">
                    <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} className="rounded border-warning bg-dark text-warning" placeholder="First Name.." required />
                </div>

                <label htmlFor="lastname" className="text-white lead">Last Name:</label><br />
                <div className="row">
                    <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} className="rounded border-warning bg-dark text-warning" placeholder="Last Name.." required />
                </div>

                <label htmlFor="email" className="text-white lead">Email:</label><br />
                <div className="row">
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} className="rounded border-warning bg-dark text-warning" placeholder="example@gmail.com" required />
                </div>

                <label htmlFor="password" className="text-white lead">Password:</label><br />
                <div className="row">
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="rounded border-warning bg-dark text-warning" placeholder="Enter in a password.." required />
                </div>

                <label htmlFor="password" className="text-white lead">Confirm Password:</label><br />
                <div className="row">
                    <input type="password" value={password2} onChange={e => setPassword2(e.target.value)} className="rounded border-warning bg-dark text-warning" placeholder="Confirm your password.." required />
                </div>

                <div className="row mt-4">
                    <button type="submit" className="btn btn-outline-danger p-2 fw-bold">Submit Registration</button>
                </div>
            </form>
        </>
    )
}

export default Register

