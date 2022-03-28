const mongoose = require('mongoose');

const MobileSchema = new mongoose.Schema({
    mobile_number: Number,
    password: Number,
    displayImage: String,
    logoImage: String
})


module.exports = mongoose.model("user_data", MobileSchema)