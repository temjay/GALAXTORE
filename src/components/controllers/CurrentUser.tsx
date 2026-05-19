
import { loggedin } from "../repositories/loginRepo"

function CurrentUser() {

  let current = loggedin()

  let crntuser = current.firstName

  if(!crntuser){
    return null
  }

  return (
    <>
      <p className="text-danger fw-bold mt-1 mb-0 text-center">Hi, {crntuser}.</p>
    </>
  )
}

export default CurrentUser

