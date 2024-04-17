const mongoose = require("mongoose")
const productModel = new mongoose.Schema({
    ProductName: {
        type: String,
        // required: [true, "Product Name is required"]
    },
    ProductDescription: {
        
    }
})