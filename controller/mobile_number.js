const Mobile = require("../Model/mobile")
const jwt = require("jsonwebtoken")
const fast2sms = require('fast-two-sms')

const mobile_user_create = async (req, res) => {

    
    if(/^\d{10}$/.test(req.body.mobile_number)) {
        let mobile_number_code = req.body.mobile_number;
    
        let code = "123456"
        var options = { authorization: "5YyVe6SvLbtNioBc10nmh2gPEDRxf4aJ9HMQAIwsUd3ZqXOGz8Z3RAXpaOT2qlsjI7Y6DFEWLw4uQxJH", message: `This is a test OTP Code Message Your OPT Code is ${code}`, numbers: [mobile_number_code] }
       let data = fast2sms.sendMessage(options).then((response) => {
            console.log("response++++++++++++",response);
            return response
            // const mobile_user = new Mobile({
            //     mobile_number: req.body.mobile_number,
            //     token: ""
            // })
            // try {
            //     console.log("++++++++++user");
            //     const token = jwt.sign(
            //         { user_id: mobile_user._id, mobile_number: mobile_user.mobile_number },
            //         process.env.SECRET_KEY,
            //         {
            //           expiresIn: "2h",
            //         }
            //       );
              
            //       // save user token
            //       mobile_user[0].token = token;
            //       console.log("++++++++++users", mobile_user);
            //       res.cookie(`jwToken`, token);
              
            //       // user
            //       res.status(200).json(mobile_user);
            //     const save_mobile_user = await mobile_user.save();
            //     console.log("++++++++++saveUser", save_mobile_user);
            //     if (save_mobile_user) {
            //         res.status(201).send(save_mobile_user);
            //     }
        
            // } catch (error) {
            //     res.status(400).send(error);
            // }
        }).then((reqest) => {
            console.log("++++++++++reqest",reqest);

        })


        console.log("data",data);

    }

  
}

module.exports = {
    mobile_user_create
}