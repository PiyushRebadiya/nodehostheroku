const mongoose = require('mongoose');

const bussinessSchema = new mongoose.Schema({
    userId: String,
    mobile_Number: String,
    company_Name: String,
    company_Email_Address: String,
    company_Website_Optional: String,
    company_Address: String,
    select_Bussiness_Category: String,
    company_Description: String,
    second_Mobile_Number: String,
})


module.exports = mongoose.model("business_data", bussinessSchema)