const mongoose = require("mongoose");
const deliveryDetails = new mongoose.Schema({
    FirstName: {
        type: String,
        required: [true, "First name is required"]
    },
    LastName: {
        type: String,
        required: [true, "Last name is required"]
    },
    ItemName: {
        type: String,
        // required: [true, "Item name is required"]
    },
    HouseAddress: {
        type: String,
        // required: [true, "House address is required"]
    },
    ZipCode: {
        type: Number,
        required: [true, "Zip Code is required"]
    },
    Quantity: {
        type: Number,
        required: [true, "Quantity is required"],
        default: 0
    },
    IdentityCard: {
        type: String
    }
}, { timestamps: true })

const delivery = mongoose.model("delivery", deliveryDetails)

module.exports = delivery