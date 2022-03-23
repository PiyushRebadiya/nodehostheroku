const mongoose = require('mongoose');

const home_greeting_image_Schema = new mongoose.Schema({
        img: String,
        header_id: String
})


module.exports = mongoose.model("homeGreetingImage", home_greeting_image_Schema)