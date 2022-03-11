const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    user_name: String,
    email: String,
    photo: String,
    mobile_number: Number,
    token: String
})


module.exports = mongoose.model("user", UserSchema)