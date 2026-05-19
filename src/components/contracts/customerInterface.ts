import type { Address } from "./addressInterface"
import type { User } from "./userInterface"


export interface Customer {
    user: User
    role: string
    phone: number
    address: Address
}