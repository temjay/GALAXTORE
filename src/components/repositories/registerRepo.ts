import type { User } from "../contracts/userInterface"

export function registerUser(User:any)
{
    const users: User [] = JSON.parse(localStorage.getItem('users') || '[]')
    users.push(User)
    localStorage.setItem('users', JSON.stringify(users))
}

export function registeredUsers() {

    //retrieve and parse the registered users list from local storage
    const users: User[] = JSON.parse(localStorage.getItem('users') || '[]')
    
    //return the array of users
    return users
}