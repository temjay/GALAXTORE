import { loggedin } from "../repositories/loginRepo"

export function locateUser() {

    let crntuser:string
    let current = loggedin()

    if (current.length > 0) {
        crntuser = current[0].firstName
    }

    return crntuser
}