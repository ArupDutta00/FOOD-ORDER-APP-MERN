import React from 'react'
import { NavLink } from 'react-router-dom'


const Cart = (props) => {
    if (props.cartdata.length !== 0) {
        return (
            <div>
                <p id="order">You Have Ordered :</p>
                {
                    props.cartdata.map((value, index) =>
                        <div>
                            <table id="ctable" width="500" border="0">
                                <tbody>
                                    <tr>
                                        <th id="left" scope="col">
                                            <p>{value.name}</p>

                                            <p>{value.price}</p>
                                            <p>{value.description}</p>
                                            <button onClick={() => props.deleteItem(value)}>Remove</button>
                                        </th>
                                        <th scope="col"><img width="200" alt="" src={value.image} /></th>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    )
                }
                <NavLink to="/"><button id="reset" onClick={props.clearCart}>Place Order</button></NavLink>
            </div>
        )
    } else {
        return (
            <div><p id="empty">OOPS! Cart is empty</p> </div>
        )
    }
}

export default Cart;
