import { useParams } from "react-router-dom"
import { savedProducts } from "../repositories/productsRepo"

export function productIdentify()
{
    const { id } = useParams()

    const productsArr = savedProducts()
    const product = productsArr.find((prod) => prod.id === Number(id))

    return product

}