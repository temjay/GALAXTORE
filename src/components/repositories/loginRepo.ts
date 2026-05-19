import type { User } from "../contracts/userInterface"

export function logUser(User:any)
{
    localStorage.setItem('loggeduser', JSON.stringify(User))
}

export function loggedin() {

    //retrieve and parse the registered users list from local storage
    const users: User = JSON.parse(localStorage.getItem('loggeduser') || '{}')
    
    //return the array of users
    return users
}