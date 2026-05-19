import type { Product } from "../contracts/productInterface"

export function savedProducts()
{
    const products:Product[] = JSON.parse(localStorage.getItem('products') || '[]')

    return products
}