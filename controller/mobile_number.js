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
        }).then((reqest) => {
            console.log("++++++++++reqest",reqest);

        })


        console.log("data",data);
      
        try {
          const token = jwt.sign(
            {mobile_number: mobile_number_code },
            process.env.SECRET_KEY,
            {
              expiresIn: "2h",
            }
          );
      
          res.cookie(`jwToken`, token);
      
          // user
          res.status(200).json({
              "status":true,
              "data": [{mobile_number:mobile_number_code,token:token}],
              "code": code
          }); 
      
        } catch (error) {
          console.log("error", error);
      
        }

    }

  
}

module.exports = {
    mobile_user_create
}