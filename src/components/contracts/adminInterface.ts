import type { Address } from "./addressInterface"
import type { User } from "./userInterface"


export interface Admin {
    user: User
    role: string
    phone: number
    address: Address
}