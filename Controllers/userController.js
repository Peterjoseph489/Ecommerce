const userModel = require("../Models/onBoardModel");
const { generateDynamicEmail } = require("../Utils/mailTemplate")
require("dotenv").config()
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")
const mailsender = require("../Controllers/mail")
// getting user details for sign up

