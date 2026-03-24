
const Order =require ('../Models/Order')
exports.createOrder = async (req, res) => {
  try {
const orders = Array.isArray(req.body) ? req.body : [req.body]
if (!orders.length || !orders[0].items||orders[0].items.length===0) {
  return res.status (400).json ({success:false,message:"Cart is empty.Can't place order now"})}

    const createdOrders = []

 for (const orderData of orders) {
 const { user, items } = orderData
      const totalPrice = items.reduce((total, item) => {
       return total + item.price * item.quantity}, 0)
       const order = await Order.create({ user,items,totalPrice })
createdOrders.push(order) }
    res.status(201).json({
      success: true,message: "Order(s) created successfully",count: createdOrders.length,
      data: createdOrders })

  } catch (error) {
  res.status(400).json({success: false,message: error.message})
}
}
exports.singleOrder = async (req,res) => {
    try {
        const order = await Order.findById (req.params.id).populate ('user')
        if (!order) {
        return res.status (404).json ({success :false,messsage : "order is  not found" })}
        res.status (200).json ({success:true,data : order})

        }catch (error) {
            res.status (500).json ({success: false,message: error.message })
        }
}
exports.allOrders =async (req,res)=>{
    try {
        const orders = await Order.find ().populate ("user")
        res.status (200).json ({success :true,count:orders.length,data: orders})
    }catch (error) {
        res.status (500).json ({success: false,message: error.message})
    }
}
exports.updateOrder = async (req, res) => {
  try {
    const { user, items } = req.body
    if (!user || !items) {
      return res.status(400).json({  success: false,  message: "User and items are required for full update"
      })  }
     const totalPrice = items.reduce((total, item) => {
      return total + item.price * item.quantity
    }, 0)

    const order = await Order.findByIdAndUpdate(
      req.params.id,{ user, items, totalPrice },
      { new: true, runValidators: true } )
    if (!order) {
      return res.status(404).json({success:false,
     message: "Order not found"  })}

    res.status(200).json({ success: true, message: "Order fully updated successfully",
      data: order })

  } catch (error) {
    res.status(400).json({success: false,message: error.message})
  }
}

exports.patchOrder = async (req, res) => {
  try {
    let updatedFields = { ...req.body }
    if (req.body.items) {
      const totalPrice = req.body.items.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0)
 updatedFields.totalPrice = totalPrice }

    const order = await Order.findByIdAndUpdate( req.params.id, updatedFields,{ new: true, runValidators: true } )

    if (!order) { 
      return res.status(404).json({success: false,  message: "Order not found"})}
res.status(200).json({success: true,message: "Order partially updated successfully", data: order})

  } catch (error) {
    res.status(400).json({ success: false,message: error.message})
  }
}
exports.deleteOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id)
    if (!order) {
      return res.status(404).json({  success: false,
      message: "Order not found"})}
 res.status(200).json({success: true,message: "Order deleted successfully"})

  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
}
