
const express = require("express")
const router = express.Router()

const { createPayment } = require("../Controller/payController")

router.post("/create-payment", createPayment)

module.exports = router
