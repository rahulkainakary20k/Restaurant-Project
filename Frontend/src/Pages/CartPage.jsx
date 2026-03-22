
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../Services/CartContext'
import axios from 'axios'
import { auth } from '../Services/firebaseConfig'
import { toast } from 'react-toastify'
import CartItem from '../Components/CartItem'
import { loadRazorpayScript, createPaymentOrder }  from "../Services/paymentService"
import './CartPage.css'

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, cartTotal } = useContext(CartContext)
  const [isCheckingOut, setIsCheckingOut] = useState(false)
  const navigate = useNavigate()

   const handleCheckout = async () => {
    if (cartItems.length === 0) {  toast.warning("Cart is empty")
      return
    }
    const currentUser = auth.currentUser
    if (!currentUser) { toast.warning("Please log in to place an order")
      navigate('/login')
      return
    }

    setIsCheckingOut(true)
    try {
      if (!(await loadRazorpayScript())) {
        toast.error("Razorpay SDK failed to load")
        return
      }

      const { success, order, key_id } = await createPaymentOrder(cartTotal)

      if (!success) { toast.error("Failed to initialize payment")
        return
      }

      const options = { key: key_id,amount: order.amount,currency: order.currency,name: "Eat Bay!",description: "Food Order Payment",order_id: order.id,

       handler: async () => {
     try {
     const orderItems = cartItems.map(item => ({name: item.name,
      price: item.price,quantity: item.quantity }))

    const response = await axios.post("http://localhost:7000/api/orders",
       {user: currentUser.uid,items: orderItems,totalPrice:cartTotal})

      if (response.data?.success) {
        toast.success("Order placed successfully!")
           clearCart()
       navigate('/menu') }

  } catch (error) {console.error("Order save error:", error)
    toast.error("Payment successful but order save failed")  }}}

      const razorpay = new window.Razorpay(options)
      razorpay.open()
      razorpay.on("payment.failed", function (response) { toast.error("Payment failed: " + response.error.description) })

    } catch (error) { console.error("Checkout error:", error)
      toast.error("Payment process failed")
    } finally {
      setIsCheckingOut(false)
    }
  }
  return (
    <div className="page bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="title text-3xl font-extrabold text-gray-900 mb-8"> Cart Items List </h1>
        <div className="flex flex-col lg:flex-row gap-8">
         <div className="flex-grow">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden text-black">
              {cartItems.map(item => (
                <CartItem key={item._id} item={item} updateQuantity={updateQuantity}
                  removeFromCart={removeFromCart} /> ))}

            </div>
          </div>
          <div className="lg:w-96 text-black">
            <div className="box bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sticky top-6">
     <h2 className="text-xl font-bold text-gray-900 mb-6"> Amount Details </h2>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
 <span className="font-medium text-gray-900"> ${cartTotal.toFixed(2)} </span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Taxes</span>
 <span className="font-medium text-gray-900"> ${(cartTotal * 0.01).toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-100 pt-4 mt-4 flex justify-between items-center">
  <span className="text-lg font-bold text-gray-900"> Total </span>
    <span className="text-2xl font-bold text-emerald-600">  ${(cartTotal * 1.01).toFixed(2)} </span>

         </div>
        </div>

  <button  onClick={handleCheckout} disabled={isCheckingOut}
       className="btn w-full py-4 rounded-md font-bold text-lg text-white bg-emerald-600 hover:bg-emerald-700">
            {isCheckingOut ? "Processing..." : "Place Order"}
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}
export default CartPage
