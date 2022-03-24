const Mobile = require("../Model/mobile")
const jwt = require("jsonwebtoken")
const fast2sms = require('fast-two-sms')

const mobile_user_create = async (req, res) => {


  if (/^\d{10}$/.test(req.body.mobile_number)) {
    const usersMobileData = await Mobile.find({ mobile_number: req.body.mobile_number })

    if (usersMobileData && usersMobileData.length == 0) {

      let mobile_number_code = await new Mobile({
        mobile_number: req.body.mobile_number,
        password: 123456
      });

      try {
        await mobile_number_code.save()
        const token = jwt.sign(
          mobile_number_code.toJSON(),
          process.env.SECRET_KEY,
          {
            expiresIn: "1h",
          }
        );

        res.cookie(`jwToken`, token);

        // user
        res.status(200).json({
          "status": true,
          "data": [{
            mobile_number: mobile_number_code.mobile_number,
            password: 123456,
            token: token
          }]
        });

      } catch (error) {
        console.log("error", error);

      }
    } else {
      let mobile_number_code = {
        mobile_number: req.body.mobile_number,
        password: 123456
      };

      try {
        const token = jwt.sign(
          mobile_number_code,
          process.env.SECRET_KEY,
          {
            expiresIn: "1h",
          }
        );

        res.cookie(`jwToken`, token);

        // user
        res.status(200).json({
          "status": true,
          "data": [{
            mobile_number: mobile_number_code.mobile_number,
            password: 123456,
            token: token
          }]
        });

      } catch (error) {
        console.log("error", error);

      }
    }


  }


}


const mobile_user_all = async (req, res) => {
  try {
    const mobile_user = await Mobile.find()
    res.clearCookie(`jwToken`);
    res.json(mobile_user)
  } catch (error) {
    res.json({ message: error });
  }
}
module.exports = {
  mobile_user_create,
  mobile_user_all
}