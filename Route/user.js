
const router = require("express").Router();
const userController = require("../controller/controller_user")
const mobileController = require("../controller/mobile_number")
const home_page_Controller = require("../controller/home_page")
const show_data_Controller = require("../controller/show_data")
const Controller_banner = require("../controller/controller_banner")
const auth = require("../middleware/auth")

router.post("/register", userController.user_create);
router.post("/connect", mobileController.mobile_user_create);
router.get("/", userController.user_all); 
router.get("/data",auth, userController.showData);
router.get("/homepage",auth, show_data_Controller.homePageData);
router.get("/banner",auth, Controller_banner.banner_slider_fun);
router.post("/banner",auth, Controller_banner.banner_slider_create);
router.post("/login", userController.login_user_fun);
router.post("/homedata",auth, home_page_Controller.home_page_data_create);
router.post("/homedata/:id",auth, home_page_Controller.home_image_create);
router.get("/homedata/image",auth, home_page_Controller.home_image_data_show);
router.get("/homedata",auth, home_page_Controller.home_page_data_show);
router.get("/register/:productId", userController.user_details);
router.put("/register/:productId", userController.user_update);
router.delete("/register/:productId", userController.user_delete);

module.exports = router;