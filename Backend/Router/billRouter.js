
const express = require("express")
const router = express.Router()
const { createBill } = require("../Controller/billController")

router.post("/", createBill)

module.exports = router
