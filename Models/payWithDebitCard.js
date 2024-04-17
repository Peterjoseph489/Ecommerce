const mongoose = require("mongoose");
const debitcard = new mongoose.Schema({
    cardNumber: {
        type: Number,
        required: [true, "Card Number is Required"]
    },
    cvv: {
        type: Number,
        required: [true, "cvv is Required"]
    },
    cardExpiryDate: {
        type: Number,
        required: [true, "Card Expiry Date is Required"]
    },
    CardFront: {
        type: String
    },
    CardBack: {
        type: String
    }
})

const debitCard = mongoose.model("debitCard", debitcard)
module.exports = debitCard