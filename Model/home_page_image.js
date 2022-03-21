const mongoose = require('mongoose');

const home_image_Schema = new mongoose.Schema({
        img: String,
        header_id: String
})


module.exports = mongoose.model("homeImage", home_image_Schema)