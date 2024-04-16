const mongoose = require("mongoose");
const cartSchema = new mongoose.Schema({
    products: [
        {
            product: { type: mongoose.Schema.Types.ObjectId, ref: "order" },
            count: Number,
            price: Number
        }
    ],
    cartTotal: Number,
    orderBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, { timestamps: true});

const cartModel = mongoose.model("AddToCart", cartSchema);
module.exports = cartModel;

