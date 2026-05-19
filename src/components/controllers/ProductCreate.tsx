import { useState } from "react"
import type { Product } from "../contracts/productInterface"
import { saveProduct } from "../repositories/productCreateRepo"
import { savedProducts } from "../repositories/productsRepo"

function ProductCreate() {

    const [name, setName] = useState<string>('')
    const [brand, setBrand] = useState<string>('')
    const [category, setCategory] = useState<string>('')
    const [price, setPrice] = useState<number>(0)
    const [description, setDescription] = useState<string>('')
    const [color, setColor] = useState<string[]>([''])

    const products = savedProducts()
    const id = products.length + 1

    // color -code
    const addColorInput = () => {
        setColor([...color, ''])
    }

    const handleColorChange = (index: number, value: string) => {
        const updated = [...color]
        updated[index] = value
        setColor(updated)
    }

    // image -code

    const [preview, setPreview] = useState<string | null>(null)

    function handleImage(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0]

        if (file) {
            const objecturl = URL.createObjectURL(file)
            setPreview(objecturl)

            const reader = new FileReader();
            reader.onloadend = () => {
                const imgstring = reader.result as string;
                setPreview(imgstring); // This is now a permanent string
            };
            reader.readAsDataURL(file);
        }
    }

    //handlesubmit
    function handleSubmit() {

        const product: Product = {
            id,
            image: preview,
            name,
            brand,
            category,
            description,
            price,
            color
        }

        saveProduct(product)
        alert(`${product.name} created successfully.`)

    }

    return (
        <>
            <form onSubmit={handleSubmit} className="mx-md-5 mt-3">
                {preview && (
                    <div className="row mb-3">
                        <img
                            src={preview} alt="Preview Image"
                            className="img-fluid"
                        />
                    </div>
                )}
                <div className="row">
                    <input type="file" accept="image/*" onChange={handleImage} className="rounded border-warning bg-dark text-warning" required />
                </div>

                <label htmlFor="productname" className="text-white lead">Product Name:</label><br />
                <div className="row">
                    <input type="text" value={name} onChange={e => setName(e.target.value)} className="rounded border-warning bg-dark text-warning" placeholder="Product Name.." required />
                </div>

                <label htmlFor="brand" className="text-white lead">Product Brand:</label><br />
                <div className="row">
                    <input type="text" value={brand} onChange={e => setBrand(e.target.value)} className="rounded border-warning bg-dark text-warning" placeholder="Product Brand.." required />
                </div>

                <label htmlFor="brand" className="text-white lead">Product Category:</label><br />
                <div className="row">
                    <input type="text" value={category} onChange={e => setCategory(e.target.value)} className="rounded border-warning bg-dark text-warning" placeholder="Product Category.." required />
                </div>

                <label htmlFor="description" className="text-white lead">Description:</label><br />
                <div className="row">
                    <textarea value={description} onChange={e => setDescription(e.target.value)} className="rounded border-warning bg-dark text-warning" placeholder="Enter in description here.." required />
                </div>

                <label htmlFor="price" className="text-white lead">Price:</label><br />
                <div className="row">
                    <input type="number" value={price} onChange={e => setPrice(e.target.valueAsNumber)} className="rounded border-warning bg-dark text-warning" required />
                </div>

                <label htmlFor="color" className="text-white lead">Color:</label><br />
                {color.map((color, index) => (
                    <div className="row mb-2" key={index}>
                        <input type="text" value={color} onChange={e => handleColorChange(index, e.target.value)} className="rounded border-warning bg-dark text-warning" placeholder="Add available color.." required />
                    </div>
                ))}

                <button onClick={addColorInput} className="btn btn-sm small btn-outline-warning p-2 fw-bold mt-3">+ color</button>

                <div className="row mt-4">
                    <button type="submit" className="btn btn-outline-danger p-2 fw-bold">Create Product</button>
                </div>
            </form>
        </>
    )
}

export default ProductCreate

