const mongoose = require('mongoose');

const MobileSchema = new mongoose.Schema({
    mobile_number: String,
    password: String,
    displayImage: String
})


module.exports = mongoose.model("user_data", MobileSchema)