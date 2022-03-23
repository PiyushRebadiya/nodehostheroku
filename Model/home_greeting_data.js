const mongoose = require('mongoose');

const home_greeting_data_Schema = new mongoose.Schema({
        header: String,
        image: Array
})


module.exports = mongoose.model("homegreeeting", home_greeting_data_Schema)