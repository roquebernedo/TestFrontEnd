import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"

const MyOrders = () => {

    const [orders, setOrders] = useState([])
 
    useEffect(() => {
      const fetchRecipe = async () => {
        try{
          const response = await axios.get("http://localhost:8000/order")
          setOrders(response.data)
          console.log(orders)
        }catch(err){
          console.error(err)
        }
      }
  
      fetchRecipe()
  
    }, [orders])

  return (
    <div>
        <header>
            <h1>My Orders</h1>
        </header>
        <div>
            <table class="table table-striped">
                <tr class="bg-info">
                    <th>ID</th>
                    <th>Order #</th>
                    <th>date</th>
                    <th># Products</th>
                    <th>Final price</th>
                    <th>Options</th>
                </tr>

                {orders.map((orders) => (
                    <tr key={orders._id}>
                        <td>{orders.id}</td>
                        <td>{orders.name}</td>
                        <td>{orders.Date}</td>
                        <th>{orders.Products}</th>
                        <th>o</th>
                        <th>
                            <button>Edit Product</button>
                            <button>Remove Product</button>
                        </th>
                    </tr>
                ))}
            </table>    
            
            <div>
                <Link to="/AddEditOrder">
                    <button>Add Order</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default MyOrders