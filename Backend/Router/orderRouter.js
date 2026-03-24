
const express =require ("express")
const router = express.Router ()
const {createOrder,singleOrder,allOrders,updateOrder,patchOrder,deleteOrder,} = require ('../Controller/orderController')

router.post ('/',createOrder)

router.get ('/',allOrders)

router.get ('/:id',singleOrder)

router.put ('/:id',updateOrder)

router.patch ('/:id',patchOrder)

router.delete ('/:id',deleteOrder)

module.exports =router

