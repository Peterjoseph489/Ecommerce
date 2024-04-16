const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
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

const userModel = mongoose.model("Users", userSchema);
module.exports = userModel;
