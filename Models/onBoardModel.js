const mongoose = require('mongoose');
const userModel = new mongoose.Schema({
    FirstName: {
        type: String,
        required: [true, "First name is required"]
    },
    LastName: {
        type: String,
        required: [true, "Last name is required"]
    },
    Email: {
        type: String,
        required: [true, "Email is required"]
    },
    Password: {
        type: String,
        required: [true, "Password is required"]
    },
    PhoneNumber: {
        type: String,
        required: [true, "Phone Number is required"]
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    isSuperAdmin: {
        type: Boolean,
        default: false
    },
    Token: {
        type: String
    }
})

const usermodel = mongoose.model("Users", userModel);
module.exports = usermodel;
