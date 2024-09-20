import axios from "axios"
import { useEffect, useState } from "react"

const ProductApi = () => {
    const [product, setProducts] = useState([])
    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    //   .then(response => response.json())
    //   .then(json => console.log(json))

    useEffect(() => {
        axios.get("https://dummyjson.com/products")
            .then(res => setProducts(res.data.products))
    }, [])


    return (
        <div>
            <h1>Product Api</h1>
            <form action="">
                <input type="text" />
                <button>add</button>
            </form>

            <ul>
                {
                    product.map((el, index) => {
                        return <div>
                            <li key={el.id}>
                                {el.title}
                            </li>
                            <button >delete</button>
                        </div>

                    })
                }
            </ul>

        </div>
    )
}

export default ProductApi
