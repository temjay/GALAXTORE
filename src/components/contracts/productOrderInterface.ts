
import type { Product } from "./productInterface"


export interface Order{
    product: Product
    quantity: number
    size?: string
}