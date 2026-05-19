import { useState } from "react"
import { addToCartAct } from "../actions/addToCartAction"
import { productIdentify } from "./productIdentify"

function AddToCart() {

    const [size, setSize] = useState<string>('')
    const [quantity, setQuantity] = useState<number>(0)

    const prod = productIdentify()

    function placeOrder() {
        const order = addToCartAct(prod, quantity, size)
        console.log(`${order.product}: Order placed successfully!`)

        return order
    }

    const order = placeOrder()

    return (
        <>
            <div className="pt-2 border-bottom border-warning">
                <span className="lead pt-1 text-warning fw-bold">Pick a color: </span>
            </div>

            <div className="row justify-content-start mx-md-0 mx-1 mt-3">
                {prod.color.map((color) => (
                    <div className="col me-1">
                        <div className="row">
                            <button
                                key={color}
                               
                                style={{
                                    backgroundColor: color.toLowerCase(),
                                    color: color.toLowerCase() === 'black' ? 'white' : 'black'
                                }}
                                className="btn fw-bold text-center">
                                {color}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <form action="" onSubmit={placeOrder}>
                <div className="row justify-content-between mx-md-0 mx-1 mt-4 pt-2">
                    <div className="col">
                        <span className="text-white lead">Quantity: </span>
                        <span><input type="number" value={quantity} onChange={e => setQuantity(e.target.valueAsNumber)} className="rounded border-warning bg-dark text-warning" /></span>
                    </div>
                    <div className="col text-end">
                        <span className="text-white lead">Your Size: </span>
                        <span><input type="text" value={size} onChange={e => setSize(e.target.value)} className="rounded border-warning bg-dark text-warning" /></span>
                    </div>
                </div>

                <div className="row mx-1 mx-md-0 mt-4">
                    <button type="submit" className="btn btn-outline-danger p-2 fw-bold">Add to cart</button>
                </div>
            </form>
        </>
    )
}

export default AddToCart

