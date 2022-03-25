const Profile = require("../Model/profile_model")

const user_profile_create = async (req, res) => {

    console.log("+++++++++req.body",req.body);
    console.log("+++++++++req.query",req.query);
}


const user_profile_all = async (req, res) => {
   
    console.log("+++++++++req.body",req.body);
    console.log("+++++++++req.query",req.query);
  try {
    const user_profile = await Profile.find()
    res.json(user_profile)
  } catch (error) {
    res.json({ message: error });
  }
}

var userprofile = (req, res) => {
  // console.log("+++++++++++++req",req);
  // console.log("+++++++++++++res",res);
  // res.setHeader('Content-Type', 'image/png');
  res.json({
    success:true,
    profile_url:`${process.env.URL}/profile/image/${req.file.filename}`
})
  console.log("fileDetailes",req.file);
    // res.json({message:'uploaded'});
};

module.exports = {
  user_profile_create,
  user_profile_all,
  userprofile
}