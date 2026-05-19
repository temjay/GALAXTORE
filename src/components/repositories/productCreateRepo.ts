import type { Product } from "../contracts/productInterface"

export function saveProduct(product: any) {
    const products: Product[] = JSON.parse(localStorage.getItem('products') || '[]')
    products.push(product)
    localStorage.setItem('products', JSON.stringify(products))
}
