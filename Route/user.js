const router = require("express").Router();
const userController = require("../controller/controller_user")
const mobileController = require("../controller/mobile_number")
const Controller_banner = require("../controller/controller_banner")
const home_page_Controller = require("../controller/home_page")
const home_greeting_Controller = require("../controller/home_greeting")
const auth = require("../middleware/auth")

router.post("/register", userController.user_create);
router.post("/connect", mobileController.mobile_user_create);
router.get("/", userController.user_all); 
router.get("/data",auth, userController.showData);
router.get("/banner",auth, Controller_banner.banner_slider_fun);
router.post("/banner",auth, Controller_banner.banner_slider_create);
router.post("/login", userController.login_user_fun);
router.get("/homedata",auth, home_page_Controller.home_page_data_show);
router.get("/greeting",auth, home_greeting_Controller.home_greeting_show);
router.post("/homedata",auth, home_page_Controller.home_page_data_create);
router.post("/greeting",auth, home_greeting_Controller.home_greeting_create);
router.post("/homedata/:id",auth, home_page_Controller.home_image_create);
router.post("/greeting/:id",auth, home_greeting_Controller.home_greeting_image_create);
router.get("/homedata/image",auth, home_page_Controller.home_image_data_show);
router.get("/greeting/image",auth, home_greeting_Controller.home_greeting_image_data_show);
router.get("/register/:productId", userController.user_details);
router.put("/register/:productId", userController.user_update);
router.delete("/register/:productId", userController.user_delete);

module.exports = router;