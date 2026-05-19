import { useState } from "react"
import { loginAct } from "../actions/loginAction"



function Login() {

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    function handleSubmit(e: any) {
        e.preventDefault()
        loginAct(email, password)
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="mx-3 mt-4">
                <label htmlFor="email" className="text-white lead">Email:</label><br />
                <div className="row mb-2">
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} className="rounded border-warning bg-dark text-warning" placeholder="example@gmail.com" required />
                </div>

                <label htmlFor="password" className="text-white lead mt-2">Password:</label><br />
                <div className="row mb-5">
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="rounded border-warning bg-dark text-warning" placeholder="Type in your password.." required />
                </div>
                
                <div className="row mb-2">
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="rounded border-warning bg-dark text-warning" placeholder="Type in your password.." required />
                </div>
            
                <div className="row mt-5">
                    <button type="submit" className="btn btn-outline-danger p-2 fw-bold">Submit Registration</button>
                </div>
            </form>
        </>
    )
}

export default Login
