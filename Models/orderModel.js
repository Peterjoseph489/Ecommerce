const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    quantity: {
        type: Number,
        required: [true, "Quantity is required"]
    }
})

const orderModel = mongoose.model("orders", OrderSchema)

module.exports = orderModel