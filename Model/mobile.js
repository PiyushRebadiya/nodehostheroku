const mongoose = require('mongoose');

const MobileSchema = new mongoose.Schema({
    mobile_number: Number
})


module.exports = mongoose.model("mobile", MobileSchema)