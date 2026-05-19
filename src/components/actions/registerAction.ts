import { registerUser } from "../repositories/registerRepo"

export function registerAct(User:any, password2:string)
    {
        if(User.password === password2)
        {   
            registerUser(User)
            alert(`${User.firstName}. Your password is confirmed successfully`)
        }
        else
        {
            alert('Password deosn\'t match!')
        }
    }