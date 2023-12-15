import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import axios from "axios"

const AddEditOrder = () => {

    const [products, setProducts] = useState([])
 
    useEffect(() => {
      const fetchRecipe = async () => {
        try{
          const response = await axios.get("http://localhost:8000/")
          setProducts(response.data)
          console.log(products)
        }catch(err){
          console.error(err)
        }
      }
  
      fetchRecipe()
  
    }, [products])

  return (
    <div>
        <header>
            <h1>Add Order</h1>
        </header>
        <div>
            <form>
                <label>Order #</label>
                <input type='text' placeholder='Order #' name='Order'/>
                <label>Date</label>
                <input type='text' name='Date'/>
                <label># Products</label>
                <input type='text' name='Products'/>
                <label>Final Price</label>
                <input type='text' name='FinalPrice'/>
            </form>
            
            <div>
                <Link to="/AddEditOrder">
                    <button>Add New Product to the Order</button>
                </Link>
            </div>

            <table>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Unit Price</th>
                    <th>Qyt</th>
                    <th>Total Price</th>
                    <th>Options</th>
                </tr>

                {products.map((products) => (
                    <tr key={products._id}>
                        <td>{products.id}</td>
                        <td>{products.name}</td>
                        <td>{products.unitPrice}</td>
                        <th>{products.qty} </th>
                        <th>{products.unitPrice * products.qty}</th>
                        <th>
                            <button>Edit Product</button>
                            <button>Remove Product</button>
                        </th>
                    </tr>
                ))}
            </table> 
        </div>
    </div>
  )
}

export default AddEditOrder