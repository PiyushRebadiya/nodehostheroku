const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    photo: String,
})


module.exports = mongoose.model("banner", UserSchema)