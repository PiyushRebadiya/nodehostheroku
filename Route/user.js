
const router = require("express").Router();
const userController = require("../controller/controller_user")
const mobileController = require("../controller/mobile_number")
const auth = require("../middleware/auth")

router.post("/register", userController.user_create);
router.post("/connect", mobileController.mobile_user_create);
router.get("/register", userController.user_all);
router.get("/data",auth, userController.showData);
router.post("/login", userController.login_user_fun);
router.get("/register/:productId", userController.user_details);
router.put("/register/:productId", userController.user_update);
router.delete("/register/:productId", userController.user_delete);

module.exports = router;