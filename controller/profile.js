
const Profile = require("../Model/profile_model")
const jwt = require("jsonwebtoken")
const axios = require('axios');

const user_profile_create = async (req, res) => {

  console.log("+++++++++req.body", req.body);
  console.log("+++++++++req.query", req.query);
}


const user_profile_all = async (req, res) => {
  try {
    const user_profile = await Profile.find()
    res.json(user_profile)
  } catch (error) {
    res.json({ message: error });
  }
}

var userprofile = async(req, res) => {
  if (req.body.type == 1) {
    let displayData = req.file && req.file.filename ? `${process.env.URL}/profile/${req.file.filename}` : ""
    res.json({
      "success": true,
      "image": displayData
    })
  } else if(req.body.type == 2) {
    let displayData = req.file && req.file.filename ? `${process.env.URL}/profile/${req.file.filename}` : ""
    res.json({
      "success": true,
      "image": displayData
    })

  } else {
    console.error("please send type for image...")
  }
};


module.exports = {
  user_profile_create,
  user_profile_all,
  userprofile
}