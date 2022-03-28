
const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    photo: String,
    logo: String
})


module.exports = mongoose.model("profile", ProfileSchema)