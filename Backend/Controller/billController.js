
const Bill = require("../Models/Bill")
const Order = require("../Models/Order")

exports.createBill = async (req, res) => {
  try {
    const { orderId, tax } = req.body

    const order = await Order.findById(orderId)
    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found"
      })
    }

    const totalAmount = order.totalPrice + (tax || 0)

    const bill = await Bill.create({
      order: orderId,
      tax,
      totalAmount
    })

    res.status(201).json({
      success: true,
      data: bill
    })

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
}
