const Bussiness = require("../Model/bussiness_model")

const businness_get_all = async (req, res) => {
    try {
        const businness_get_data = await Bussiness.find()
        res.json(businness_get_data)
    } catch (error) {
        res.json({ message: error });
    }
}

const businness_get_details = async (req, res) => {
    try {
        const bussines_get_data = await Bussiness.findById(req.params.id)
        res.json(bussines_get_data)
    } catch (error) {
        res.json({ message: error });
    }
}

const businness_create = async (req, res) => {
    let { userId,mobile_Number, company_Name, company_Email_Address, company_Website_Optional, company_Address, select_Bussiness_Category, company_Description, second_Mobile_Number, logoImage } = req.body
    var emailRegex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
   
    if (mobile_Number.length == 0) {
        res.send({ messsage: "Required Mobile Number" })
    } else if (!/^\d{10}$/.test(mobile_Number)) {
        res.send({ messsage: "Please Enter 10 Digit Mobile Number" })
    } else if (company_Name.length == 0) {
        res.send({ messsage: "Required Company Name" })
    } else if (company_Email_Address.length == 0) {
        res.send({ messsage: "Required Company Email Address" })
    } else if (!emailRegex.test(company_Email_Address)) {
        res.send({ messsage: "Wrong Typing Email Address" })
    } else if (company_Address.length == 0) {
        res.send({ messsage: "Required Company Address" })
    } else if (select_Bussiness_Category.length == 0) {
        res.send({ messsage: "Required Selected Bussiness Category" })
    } else if (second_Mobile_Number && second_Mobile_Number.length > 0 && !/^\d{10}$/.test(second_Mobile_Number)) {
        res.send({ messsage: "Please Enter 10 Digit Second Mobile Number" })
    } else {

        let data = await new Bussiness({
            userId: userId,
            mobile_Number: mobile_Number,
            company_Name: company_Name,
            company_Email_Address: company_Email_Address,
            company_Website_Optional: company_Website_Optional || "",
            company_Address: company_Address,
            select_Bussiness_Category: select_Bussiness_Category,
            company_Description: company_Description || "",
            second_Mobile_Number: second_Mobile_Number || "",
            logoImage: logoImage || ""
        })

        if (data) {
            data.save();
            res.send({ status: true, data: data })
        }

    }

}

const businness_update = async (req, res) => {
    let { logoImage, mobile_Number, company_Name, company_Email_Address, company_Website_Optional, company_Address, select_Bussiness_Category, company_Description, second_Mobile_Number } = req.body
    var emailRegex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
    if (mobile_Number?.length === 0) {
        return res.send({ messsage: "Required Mobile Number" })
    } else if (typeof (mobile_Number) !== 'undefined' && mobile_Number.length !== 10) {
        return res.send({ messsage: "Please Enter 10 Digit Mobile Number" })
    } else if (company_Name?.length == 0) {
        return res.send({ messsage: "Required Company Name" })
    } else if (company_Email_Address?.length == 0) {
        return res.send({ messsage: "Required Company Email Address" })
    } else if (typeof (company_Email_Address) !== 'undefined' && !emailRegex.test(company_Email_Address)) {
        return res.send({ messsage: "Wrong Typing Email Address" })
    } else if (company_Address?.length == 0) {
        return res.send({ messsage: "Required Company Address" })
    } else if (select_Bussiness_Category?.length == 0) {
        return res.send({ messsage: "Required Selected Bussiness Category" })
    } else if (second_Mobile_Number && second_Mobile_Number.length > 0 && !/^\d{10}$/.test(second_Mobile_Number)) {
        return res.send({ messsage: "Please Enter 10 Digit Second Mobile Number" })
    } else {
        const bussiness_users = {
            mobile_Number: mobile_Number,
            company_Name: company_Name,
            company_Email_Address: company_Email_Address,
            company_Website_Optional: company_Website_Optional || "",
            company_Address: company_Address,
            select_Bussiness_Category: select_Bussiness_Category,
            company_Description: company_Description || "",
            second_Mobile_Number: second_Mobile_Number || "",
            logoImage: logoImage || ""
        }
        try {

            const bussinessUsers = await Bussiness.findByIdAndUpdate(
                { _id: req.params.id },
                bussiness_users
            );
            res.json({ status: "Succesfully Update Data", data: bussinessUsers });
        } catch (error) {
            res.json({ message: error });
        }
    }

}
const businness_delete = async (req, res) => {
    try {
        const bussiness_Users = await Bussiness.findByIdAndDelete(req.params.id);
        res.json({ status: "succesfully deleted data", data: bussiness_Users });
    } catch (error) {
        res.json({ message: error });
    }
}

module.exports = {
    businness_get_all,
    businness_create,
    businness_update,
    businness_delete,
    businness_get_details
}