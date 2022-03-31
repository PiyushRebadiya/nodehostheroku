const router = require("express").Router();
const express = require("express")
const app = express();
const multer  = require('multer')
const path = require("path")

const userController = require("../controller/controller_user")
const mobileController = require("../controller/mobile_number")
const Controller_banner = require("../controller/controller_banner")
const home_page_Controller = require("../controller/home_page")
const home_greeting_Controller = require("../controller/home_greeting")
const profile_Controller = require("../controller/profile")
const business_Controller = require("../controller/controller_business")

const auth = require("../middleware/auth")


// router.post("/register", userController.user_create);
router.post("/register", mobileController.mobile_user_create);
router.put("/register/:id", mobileController.mobile_user_update);
router.get("/register", mobileController.mobile_user_all);
router.get("/profile", profile_Controller.user_profile_all);
// router.post("/profile", profile_Controller.user_profile_create);

router.get("/business",auth, business_Controller.businness_get_all);
router.post("/business/:id",auth, business_Controller.businness_create);
router.delete("/business/:id",auth, business_Controller.businness_delete);
router.put("/business/:id",auth, business_Controller.businness_update);

// router.get("/", userController.user_all); 
router.get("/data",auth, userController.showData);
router.get("/banner",auth, Controller_banner.banner_slider_fun);
router.post("/banner",auth, Controller_banner.banner_slider_create);
// router.post("/login", userController.login_user_fun);
router.get("/homedata",auth, home_page_Controller.home_page_data_show);
router.get("/greeting",auth, home_greeting_Controller.home_greeting_show);
router.post("/homedata",auth, home_page_Controller.home_page_data_create);
router.post("/greeting",auth, home_greeting_Controller.home_greeting_create);
router.post("/homedata/:id",auth, home_page_Controller.home_image_create);
router.post("/greeting/:id",auth, home_greeting_Controller.home_greeting_image_create);
router.get("/homedata/image",auth, home_page_Controller.home_image_data_show);
router.get("/greeting/image",auth, home_greeting_Controller.home_greeting_image_data_show);
// router.get("/register/:productId", userController.user_details);
// router.put("/register/:productId", userController.user_update);
// router.delete("/register/:productId", userController.user_delete);

// //Add Image
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // console.log("reqqqqqqqq",req.body);
    cb(null, "images");
  },
  filename:(req,file,cb)=>{
      console.log("+++++++++++file",file);
            let newname = Date.now()+'-'+file.originalname;
            console.log("+++++++newname",newname);
            cb(null,newname)
        }
});
var upload = multer({storage:storage });
router.post("/profile/:id", upload.single("image"), profile_Controller.userprofile);

module.exports = router;
