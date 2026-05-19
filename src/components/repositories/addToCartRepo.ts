import type { Order } from "../contracts/productOrderInterface"

export function addCart(product: any) {
    const cart: Order[] = JSON.parse(localStorage.getItem('cart') || '[]')
    cart.push(product)
    localStorage.setItem('cart', JSON.stringify(cart))
}