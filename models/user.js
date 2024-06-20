const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/CuizineUsers");

const userModel = mongoose.Schema({
    name:String,
    email:String,
    phoneNo : Number,
    password: String,
})

module.exports = mongoose.model("user",userModel)