const mongoose = require('mongoose');

const home_Data_Schema = new mongoose.Schema({
        header: String,
        image: Array
})


module.exports = mongoose.model("homedata", home_Data_Schema)