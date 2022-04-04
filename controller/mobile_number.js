const Mobile = require("../Model/mobile")
const jwt = require("jsonwebtoken")
const fast2sms = require('fast-two-sms')
const bcrypt = require('bcryptjs');

const mobile_user_create = async (req, res) => {


  if(req.body.mobile_number.length > 0 || req.body.mobile_number != undefined) {
    if (/^\d{10}$/.test(req.body.mobile_number)) {

      if (req.body.password && req.body.mobile_number || req.body.password == "") {
        return verify_password(req, res)
      }

      return res.send({ message: "Successfully" })

    } else {
      return res.send({ message: "Enter your valid 10 digit number" })
    }
  } else {
    return res.send({ message: "Reqiured mobile number" })
  }


}

async function verify_password(req, res) {

// const passwordHash = await bcrypt.hash(req.body.password, 10);
// console.log("passwordHash",passwordHash);

// const passwordmatch = await bcrypt.compare(req.body.password, passwordHash);
//  console.log("passwordmatch",passwordmatch);

if(req.body.password.length > 0  || req.body.password != undefined) {
    if (/^\d{6}$/.test(req.body.password)) {
      const usersMobileData = await Mobile.find({ mobile_number: req.body.mobile_number })
      if (usersMobileData && usersMobileData.length == 0) {

        let mobile_number_code = await new Mobile({
          mobile_number: req.body.mobile_number,
          password: req.body.password,
          displayImage: ""
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
          res.json({
            "status": true,
            "data": [{

              displayImage: usersMobileData[0].displayImage,
              mobile_number: usersMobileData[0].mobile_number,
              userId: usersMobileData[0]._id,

              token: token
            }]
          });

        } catch (error) {
          // console.log("error", error);
          res.error({ message: "please check your password" })

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
            res.json({
              "status": true,
              "data": [{
                displayImage: usersMobileData[0].displayImage,
                mobile_number: usersMobileData[0].mobile_number,
                userId: usersMobileData[0]._id,
                token: token
              }]
            });

          } catch (error) {
            // console.log("error", error);

            res.send({ message: error })
          }
        } else {
          res.send({ message: "Please Enter Your True Password" })
        }

      }
    } else {
      return res.send({ message: "Please Enter 6 Digit Verify Number" })
    }
  } else {
    return res.send({ message: "Reqiured Verify Number" })

  }
}

const mobile_user_update = async (req, res) => {
  const users = {
    mobile_number: req.body.mobile_number,
    password: req.body.password,
    displayImage: req.body.displayImage,
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

const mobile_user_delete = async (req,res) => {
  try {
    const delete_mobile_user = await Mobile.findByIdAndDelete(req.params.id);
    res.json(delete_mobile_user)
  } catch (error) {
    res.send({ message: error })
  }
}

const mobile_user_all = async (req, res) => {
  let { offset, limit } = req.query;
  if(offset && limit){
    try {
      const mobile_user = await Mobile.find().limit(limit).skip(offset);
      const mobile_user_count = await Mobile.find();
      res.clearCookie(`jwToken`);
      res.json({
        offset,
        limit,
        count : mobile_user_count.length,
        data: mobile_user
      })
    } catch (error) {
      res.json({ message: error });
    }
  }else{
    try {
      const mobile_user_count = await Mobile.find();
      res.clearCookie(`jwToken`);
      res.json({
        data: mobile_user_count
      })
    } catch (error) {
      res.json({ message: error });
    }
  }

}
module.exports = {
  mobile_user_create,
  mobile_user_all,
  mobile_user_update,
  mobile_user_delete
}