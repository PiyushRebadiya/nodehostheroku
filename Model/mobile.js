const mongoose = require('mongoose');

const MobileSchema = new mongoose.Schema({
    mobile_number: Number,
    token: String
})


module.exports = mongoose.model("mobile", MobileSchema)