
import { logUser, } from "../repositories/loginRepo";
import { registeredUsers } from "../repositories/registerRepo";

export function loginAct(email: string, password: string) {
    let registered = registeredUsers()

    const loggingUser = registered.filter((user) => user.email == email && user.password == password)
    if (loggingUser.length > 0) 
    {
        logUser(loggingUser[0])
    }
    else {
        alert(`Incorrect Credentials!`)
    }

}