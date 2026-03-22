

import axios from "axios"

export const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    const script = document.createElement("script")
    script.src = "https://checkout.razorpay.com/v1/checkout.js"

    script.onload = () => resolve(true)
    script.onerror = () => resolve(false)

    document.body.appendChild(script)
  })
}


export const createPaymentOrder = async (amount) => {
    try {
  const response = await axios.post(
    "http://localhost:7000/api/pay/create-payment",
    { amount }
  )

  return response.data
} catch (error) {
    console.log("Payment cration failed...:",error)
    return {success: false}
}
}
