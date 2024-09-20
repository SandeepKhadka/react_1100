import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ComponentLifeCycle = () => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        axios.get("https://dummyjson.com/products")
            .then(res => setProduct(res.data.products)
            )
    }, [])

    function submitData(e) {
        e.preventDefault()
        let temp = [...product, { title: e.target.title.value }]
        setProduct(temp)
    }

    function deleteProduct(index){
        let temp = product.filter((el , i) => i != index)
        setProduct(temp)
    }

    return (
        <div>
            <h1>Products Api</h1>
            <form onSubmit={submitData}>
                <input type="text" name="title" id="" />
                <button>create new todo</button>
            </form>
            {/* {JSON.stringify(product)} */}
            <ul>
                {
                    product.map((el, index) => {
                        return (<div>
                            <li>{el.title}</li> <button onClick={() => {
                                deleteProduct(index)
                            }}>delete</button>
                        </div>)

                    })
                }
            </ul>

        </div>
    )
}

export default ComponentLifeCycle
