
require ('dotenv').config ()
const express =require('express')
const cors = require ('cors')
const mongoose = require ('mongoose')
const morgan =require ("morgan")


const app = express ()
app. use (express.json ())
app.use (cors())
app.use (morgan("dev"))

const menuRouter = require ('./Router/menuRouter')
const billRouter =require ('./Router/billRouter')
const orderRouter =require ('./Router/orderRouter')
const payRouter = require("./Router/payRouter")

app.use ('/api/menu',menuRouter)
app.use ('/api/orders',orderRouter)
app.use ('/api/bills',billRouter)
app.use("/api/pay", payRouter)


const mongoURL = process.env.MONGO_URL
console.log('Connecting to MongoDB at', mongoURL)

mongoose.connect (mongoURL)
.then (()=> console.log('MongoDB Connected to Successfully'))
.catch ((error)=> console.error ('Database Connnection error:',error))

const PORT =process.env.PORT || 9000
app.listen (PORT,()=> console.log(`Server running successfully on port:${PORT}`))
