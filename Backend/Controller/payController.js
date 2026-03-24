
const Razorpay = require("razorpay")

exports.createPayment = async (req, res) => {
  try {
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_SECRET  
    })

    const { amount } = req.body

    const options = {
      amount: amount * 100,currency: "INR",receipt: "receipt_order_1"
    }

    const order = await razorpay.orders.create(options)

    res.json({success: true, order, key_id: process.env.RAZORPAY_KEY_ID})

  } catch (error) {
    res.status(500).json({success: false,message: error.message})

  }
}


