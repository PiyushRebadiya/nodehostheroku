const mongoose = require('mongoose');

const MobileSchema = new mongoose.Schema({
    mobile_number: Number,
    password: Number
})


module.exports = mongoose.model("user_data", MobileSchema)