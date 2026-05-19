import type { Order } from "../contracts/productOrderInterface"
import { addCart } from "../repositories/addToCartRepo"

export function addToCartAct(product, quantity, size) 
{
    const order: Order = {
        product: product,
        quantity,
        size,
    }

    addCart(order)

    return order
}
