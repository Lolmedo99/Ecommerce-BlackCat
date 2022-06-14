import axios from 'axios'
import React from 'react'

function Checkout() {
    const cart=JSON.parse(localStorage.getItem('cart'))
    const user=JSON.parse(localStorage.getItem('user'))

    const handleSubmit=(e)=>{
         e.preventDefault()
        axios.post("http://localhost:3001/api/order/buy",{data:[user.id, cart]})
    }

  return (
    <div>
        <div class='py-6'></div>
        <div class='py-6'></div>
        <div class='py-6'></div>
        <form onSubmit={handleSubmit}>
            <button> FIN</button>
        </form>
        <div class='py-6'></div>
        <div class='py-6'></div>
        <div class='py-6'></div>
    </div>
  )
}

export default Checkout