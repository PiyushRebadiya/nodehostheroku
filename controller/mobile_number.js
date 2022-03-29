const Mobile = require("../Model/mobile")
const jwt = require("jsonwebtoken")
const fast2sms = require('fast-two-sms')

const mobile_user_create = async (req, res) => {


  if (/^\d{10}$/.test(req.body.mobile_number)) {

    if (req.body.password && req.body.mobile_number) {
     return verify_password(req,res)
    }

    return res.status(201).send({ message: "Successfully" })

  } else {
    return res.status(404).send({ message: "Please Enter 10 digit mobile number" })
  }


}

async function verify_password (req,res){
  if (/^\d{6}$/.test(req.body.password)) {
    const usersMobileData = await Mobile.find({ mobile_number: req.body.mobile_number })
    if (usersMobileData && usersMobileData.length == 0) {

      let mobile_number_code = await new Mobile({
        mobile_number: req.body.mobile_number,
        password: req.body.password
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
            displayImage: mobile_number_code.displayImage,
            logoImage: mobile_number_code.displayImage,
            mobile_number: mobile_number_code.mobile_number,
            userId: mobile_number_code._id,
            token: token
          }]
        });

      } catch (error) {
        // console.log("error", error);
        res.error({ message: "please check your password..." })

      }
    } else {
      if (usersMobileData[0].password == req.body.password) {
        let mobile_number_code = {
          mobile_number: req.body.mobile_number,
          password: req.body.password
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
              displayImage: usersMobileData[0].displayImage,
              logoImage: usersMobileData[0].logoImage,
              mobile_number: usersMobileData[0].mobile_number,
              userId: usersMobileData[0]._id,
              token: token
            }]
          });

        } catch (error) {
          // console.log("error", error);

          res.status(404).send({ message: error })
        }
      } else {
        res.status(404).send({ message: "Please Enter Your True Password..." })
      }

    }
  } else {
    res.status(404).send({ message: "Please Enter 6 Digit Verify Number..." })
  }
}

const mobile_user_update = async (req, res) => {
  const users = {
    mobile_number: req.body.mobile_number,
    password: req.body.password,
    displayImage: req.body.displayImage,
    logoImage: req.body.logoImage,
  }

  try {

    const updateUsers = await Mobile.findByIdAndUpdate(
      { _id: req.params.id },
      users
    );
    res.json(updateUsers);
  } catch (error) {
    res.json({ message: error });
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
  mobile_user_all,
  mobile_user_update
}