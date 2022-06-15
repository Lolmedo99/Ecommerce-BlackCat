import React from "react";
import {useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderProducts } from "../redux/products";



const PreviousOrders=({order})=>{
    const dispatch=useDispatch()
    const prodOrder=useSelector((state)=>state.products)
    
useEffect(() => {
    order.order_items.map((item)=>dispatch(getOrderProducts(item.productId)) )    
}, [])

const getName=(id)=>{return prodOrder.find((element)=>element.id===id)}


return(
<table class="table is-hoverable has-background-color2">
    <thead>
        <tr>Orden #{order.id}</tr>
        <tr>
            <th>PRODUCTO</th>
            <th>CANTIDAD</th>
        </tr>
    </thead>
        {order.order_items.map((order_item)=>{
        let currentProd=getName(order_item.productId);
        return(
        <tbody>
        <tr>
            <th>{currentProd?currentProd.name:'Producto'}</th>
            <th>{order_item.amount}</th>
        </tr>
        </tbody>
        )})}
</table>)

}


export default PreviousOrders


// return(
//     <div class='p-6'>
//     <ul class='ml-6'>
//             <li  class='p-3'>
//             <div class="dropdown is-hoverable">
//             <div class="dropdown">
//                 <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
//                 <span></span>
//                 <span class="icon is-small">
//                 <i class="fas fa-angle-down" aria-hidden="true"></i>
//                 </span>
//                 </button>
//             </div>    
//             <div class="dropdown-menu" id="dropdown-menu" role="menu">
//             <div class="dropdown-content">
//                 
//             </div>
//             </div>
//         </div>
//         </li>
//     </ul >
//     </div>)
